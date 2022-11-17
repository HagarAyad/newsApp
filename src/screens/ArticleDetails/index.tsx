import React from 'react';
import {View, Text, Image} from 'react-native';
//--
import {ArticleDetailsProps} from '~navigation/types';
//--
import {styles} from './styles';

const ArticleDetails = ({route}: ArticleDetailsProps) => {
  const {article} = route.params || {};
  const {urlToImage, title, author, content, publishedAt} = article;

  return (
    <View style={styles.container}>
      <Image source={{uri: urlToImage}} style={styles.image} />
      <Text>{publishedAt}</Text>
      <Text style={styles.title}>{title}</Text>
      {!!author && (
        <Text>
          <Text style={styles.by}>by : </Text>
          <Text>{author} </Text>
        </Text>
      )}
      <Text>{content}</Text>
    </View>
  );
};

export default ArticleDetails;
