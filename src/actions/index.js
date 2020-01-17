import { ADD_ARTICLE, GET_ARTICLE_BY_INDEX, GET_ALL_ARTICLES } from "./action-types";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getArticle(payload) {
  return {type: GET_ARTICLE_BY_INDEX, payload};
}

export function getAllArticles(payload) {
  return {type: GET_ALL_ARTICLES, payload};
}