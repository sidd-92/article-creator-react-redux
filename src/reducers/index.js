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
} from "../actions/action-types";
const initialState = {
  articles: [],
  totalArticles: 0,
  authors: [],
  loading: false,
  todos: [],
  error: null
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      totalArticles: state.articles.length + 1
    });
  }
  if (action.type === GET_ARTICLE_BY_INDEX) {
    let index = action.payload;
    return Object.assign({}, state, {
      singleArticle: state.articles[index]
    });
  }
  if (action.type === GET_ALL_ARTICLES) {
    return Object.assign({}, state, {
      articles: state.articles,
      totalArticles: state.articles.length
    });
  }
  if (action.type === ADD_TODO_STARTED) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === ADD_TODO_SUCCESS) {
    return {
      ...state,
      loading: false,
      error: null,
      todos: [...state.todos, action.payload]
    };
  }
  if (action.type === ADD_TODO_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };
  }

  if (action.type === GET_AUTHORS_STARTED) {
    return {
      ...state,
      loading: true
    };
  }
  if (action.type === GET_AUTHORS_SUCESS) {
    return Object.assign({}, state, {
      authors: action.payload,
      error: null,
      loading: false
    });
  }
  if (action.type === GET_AUTHORS_FAILURE) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    };
  }
  return state;
}

export default rootReducer;
