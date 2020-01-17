import React,{useState} from "react";
import "./App.css";
import { connect } from "react-redux";
import { addArticle } from "./actions/index";
const mapStateToProps = state => {
  console.log("STATE", state);
  return { articles: state.articles };
};
const ArticleForm = (props) => {
  let [articleTitle, setArticleTitle] = useState("");
  let [articleBody, setArticleBody] = useState("");
  return (
    <div className="FormBody">
      <div className="FormField">
        <label for="title">Article Title</label>
        <input value={articleTitle} onChange={(e) => {
          e.preventDefault();
          setArticleTitle(e.target.value);
        }} type="text" placeholder="Enter Title" />
      </div>
      <div className="FormField">
        <label for="author">Article By</label>
        <input value={articleBody} type="text" placeholder="Enter Author" />
      </div>
      <div className="FormField">
        <button onClick={()=> {
          setArticleTitle("");
          props.dispatch( addArticle({ title: articleTitle, id: 1 }) )
        }}>Submit</button>
      </div>
    </div>
  );
};


export default connect(mapStateToProps)(ArticleForm);