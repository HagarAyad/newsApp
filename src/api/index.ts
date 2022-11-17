import axios, {AxiosResponse} from 'axios';
import {Article} from '~types';

const axiosClient = axios.create({
  baseURL: 'https://newsapi.org/v2',
});

const {get} = axiosClient;

const API_KEY = 'b08e7d44243649028e64a9802c15f72c';

export type ArticlesOptions = {
  signal?: AbortSignal;
  pageSize?: number;
  currentPage: number;
  queryText?: string;
};

type ArticlesResponse = {
  status: string;
  totalResults: number;
  articles: Article[];
};

const API_ENDPOINTS = {
  articles: ({
    signal,
    currentPage,
    pageSize = 10,
    queryText,
  }: ArticlesOptions) =>
    get<any, AxiosResponse<ArticlesResponse>>(
      `/everything?apiKey=${API_KEY}&pageSize=${pageSize}&page=${currentPage}&q=${queryText}&searchIn=title`,
      {signal},
    ),
};

export default API_ENDPOINTS;
