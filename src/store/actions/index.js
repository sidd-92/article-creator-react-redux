import {
  ADD_ARTICLE,
  GET_ARTICLE_BY_INDEX,
  GET_ALL_ARTICLES,
  ADD_TODO_SUCCESS,
  ADD_TODO_FAILURE,
  ADD_TODO_STARTED,
  GET_AUTHORS_STARTED,
  GET_AUTHORS_SUCESS,
  GET_AUTHORS_FAILURE
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

export const addTodo = ({ title, userId }) => {
  return dispatch => {
    dispatch(addTodoStarted());

    axios
      .post(`https://jsonplaceholder.typicode.com/todos`, {
        title,
        userId,
        completed: false
      })
      .then(res => {
        dispatch(addTodoSuccess(res.data));
      })
      .catch(err => {
        dispatch(addTodoFailure(err.message));
      });
  };
};

const addTodoSuccess = todo => ({
  type: ADD_TODO_SUCCESS,
  payload: {
    ...todo
  }
});

const addTodoStarted = () => ({
  type: ADD_TODO_STARTED
});

const addTodoFailure = error => ({
  type: ADD_TODO_FAILURE,
  payload: {
    error
  }
});

export const getAuthors = () => {
  return dispatch => {
    dispatch(getAuthorsStarted());
    axios
      .get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        dispatch(getAuthorsSucess(res.data));
      })
      .catch(err => {
        dispatch(getAuthorsFailure(err.message));
      });
  };
};
const getAuthorsSucess = authors => ({
  type: GET_AUTHORS_SUCESS,
  payload: authors
});

const getAuthorsStarted = () => ({
  type: GET_AUTHORS_STARTED
});

const getAuthorsFailure = error => ({
  type: GET_AUTHORS_FAILURE,
  payload: {
    error
  }
});
