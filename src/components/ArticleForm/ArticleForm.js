import React, { useState } from "react";
import { connect } from "react-redux";
import DropDown from "../DropDown/index";
import { addArticle } from "../../store/actions/index";
const mapStateToProps = state => {
  return { articles: state.articles };
};
const ArticleForm = props => {
  let [articleTitle, setArticleTitle] = useState("");
  let [articleBody, setArticleBody] = useState("");
  return (
    <div className="FormBody">
      <div className="FormField">
        <label for="title">Article Title</label>
        <input
          value={articleTitle}
          onChange={e => {
            e.preventDefault();
            setArticleTitle(e.target.value);
          }}
          type="text"
          placeholder="Enter Title"
        />
      </div>
      <div className="FormField">
        <label for="author">Article By</label>
        <input
          value={articleBody}
          onChange={e => {
            e.preventDefault();
            setArticleBody(e.target.value);
          }}
          type="text"
          placeholder="Enter Author"
        />
      </div>
      <div className="FormField">
        <DropDown />
      </div>
      <div className="FormField">
        <button
          onClick={() => {
            setArticleTitle("");
            setArticleBody("");
            articleTitle !== "" &&
              articleBody !== "" &&
              props.dispatch(
                addArticle({ title: articleTitle, id: 1, by: articleBody })
              );
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};

export default connect(mapStateToProps)(ArticleForm);
