import type {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Article} from '~types';

export type ArticlesStackParamList = {
  Articles: undefined;
  ArticleDetails: {article: Article};
};

export type ArticleDetailsProps = NativeStackScreenProps<
  ArticlesStackParamList,
  'ArticleDetails'
>;
