import React, {useState, useEffect, useCallback} from 'react';
import {
  View,
  Text,
  FlatList,
  Image,
  RefreshControl,
  TextInput,
  Pressable,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
//--
import API_ENDPOINTS, {ArticlesOptions} from '~api';
import i18n from '~locals';
import {ArticleDetailsProps} from '~navigation/types';
import {Article} from '~types';
//--
import {styles, articleStyles} from './styles';

const ArticleItem = ({item}: {item: Article}) => {
  const navigation = useNavigation<ArticleDetailsProps['navigation']>();
  const {title, urlToImage, description, author, publishedAt} = item;

  return (
    <Pressable
      style={articleStyles.container}
      onPress={() => navigation.navigate('ArticleDetails', {article: item})}>
      <Image source={{uri: urlToImage}} style={articleStyles.thumbnail} />
      <View style={articleStyles.infoContainer}>
        <Text>{publishedAt}</Text>
        <Text style={articleStyles.title}>{title}</Text>
        <Text>{description.substring(0, 50)}....</Text>
        {!!author && (
          <Text>
            <Text style={articleStyles.title}>by : </Text>
            <Text>{author} </Text>
          </Text>
        )}
      </View>
    </Pressable>
  );
};

const ArticlesList = () => {
  const PAGE_SIZE = 15;
  const INITIAL_QUERY_TEXT = 'Apple';
  const [totalResults, setTotalResults] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [articleList, setArticleList] = useState<Article[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [searchText, setSearchText] = useState(INITIAL_QUERY_TEXT);
  const [querySearch, setQuerySearch] = useState(INITIAL_QUERY_TEXT);
  const controller = new AbortController();

  const onEndReached = () => {
    const numOfPages = Math.ceil(totalResults / PAGE_SIZE);
    if (currentPage > numOfPages) return;
    setCurrentPage(prev => prev + 1);
  };

  const getArticles = useCallback(
    async (options: ArticlesOptions) => {
      setIsLoading(true);
      setHasError(false);
      try {
        const {data} = await API_ENDPOINTS.articles(options);
        const {articles = []} = data || {};
        setTotalResults(data?.totalResults);
        setArticleList(
          options.currentPage === 1 ? articles : [...articleList, ...articles],
        );
      } catch (e) {
        console.log('FETCH_ARTICLES_ERROR', e);
        setHasError(true);
      } finally {
        setIsLoading(false);
      }
    },
    [articleList],
  );

  useEffect(() => {
    getArticles({
      currentPage,
      pageSize: PAGE_SIZE,
      queryText: querySearch,
      signal: controller.signal,
    });
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage]);

  useEffect(() => {
    if (querySearch !== INITIAL_QUERY_TEXT) {
      setCurrentPage(1);
      getArticles({
        currentPage: 1,
        pageSize: PAGE_SIZE,
        queryText: querySearch,
        signal: controller.signal,
      });
    }
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [querySearch]);

  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          placeholder={'search here'}
          value={searchText}
          onChangeText={text => setSearchText(text)}
        />
        <Text onPress={() => setQuerySearch(searchText)}>
          {i18n.t('search')}{' '}
        </Text>
      </View>
      {hasError ? (
        <Text>Some error happened</Text>
      ) : (
        <FlatList
          data={articleList}
          keyExtractor={(item, index) => `${item.source.id}-${index}`}
          renderItem={({item}) => <ArticleItem item={item} />}
          onEndReached={onEndReached}
          refreshControl={
            <RefreshControl
              refreshing={isLoading}
              onRefresh={() => setCurrentPage(1)}
            />
          }
        />
      )}
    </View>
  );
};

export default ArticlesList;
