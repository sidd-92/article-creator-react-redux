import { ADD_ARTICLE, GET_ARTICLE_BY_INDEX, GET_ALL_ARTICLES } from "../actions/action-types";
const initialState = {
  articles: []
};
function rootReducer(state = initialState, action) {
  if (action.type === ADD_ARTICLE) {
    return Object.assign({}, state, {
      articles: state.articles.concat(action.payload)
    });
  }
  if(action.type === GET_ARTICLE_BY_INDEX) {
    let index = action.payload;
    return state.articles[index];
  }
  if(action.type === GET_ALL_ARTICLES ) {
    return {articles: state.articles, totalArticles: state.articles.length}
  }
  return state;
}
export default rootReducer;