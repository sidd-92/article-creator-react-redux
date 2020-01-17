import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import store from "./store";
import { Provider } from "react-redux";
import { addArticle, getAllArticles, getArticle } from "./actions/index";
store.dispatch( addArticle({ title: 'React Redux Tutorial for Beginners', id: 1 }) );
store.dispatch( addArticle({ title: 'Redux Master Tutorial for Beginners', id: 2 }) );
store.dispatch( addArticle({ title: 'Master Tutorial for Beginners', id: 3 }) );
store.dispatch( addArticle({ title: 'Tutorial for Beginners', id: 4 }) );
ReactDOM.render(<Provider store={store}><App/> </Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
