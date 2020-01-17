import {
  ADD_ARTICLE,
  GET_ARTICLE_BY_INDEX,
  GET_ALL_ARTICLES,
  GET_ALL_AUTHORS
} from "./action-types";
import axios from "axios";
export function addArticle(payload) {
  return { type: ADD_ARTICLE, payload };
}

export function getArticle(payload) {
  return { type: GET_ARTICLE_BY_INDEX, payload };
}

export function getAllArticles(payload) {
  return { type: GET_ALL_ARTICLES, payload };
}

export const getAuthors = () => {
  return dispatch => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => {
        console.log("RESULT ALL USERS", res.data);
        dispatch(getAllAuthors(res.data));
      })
      .catch(err => {
        //dispatch(addTodoFailure(err.message));
      });
  };
};

export const getAllAuthors = payload => {
  console.log("GET All Authors", payload);
  return { type: GET_ALL_AUTHORS, payload };
};
