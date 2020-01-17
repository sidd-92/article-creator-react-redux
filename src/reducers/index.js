import { ADD_ARTICLE, GET_ARTICLE_BY_INDEX, GET_ALL_ARTICLES, GET_ALL_AUTHORS } from "../actions/action-types";
const initialState = {
  articles: [],
  totalArticles: 0,
  authors: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload),
      totalArticles: state.articles.length
    });
  }
  if(action.type === GET_ARTICLE_BY_INDEX) {
    let index = action.payload;
    return Object.assign({}, state, {
      singleArticle: state.articles[index]
    });
  }
  if(action.type === GET_ALL_ARTICLES ) {
    return {articles: state.articles, totalArticles: state.articles.length}
  }
  if(action.type === GET_ALL_AUTHORS ) {
    return Object.assign({}, state, {
      authors: state.authors.concat(action.payload)
    });
  }
  return state;
}
export default rootReducer;