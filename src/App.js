import React from "react";
import logo from "./logo.svg";
import "./App.css";
import List from "./List";
import ArticleForm from "./ArticleForm";
import TopMenu from "./components/topMenu/index";

function App() {
  return (
    <React.Fragment>
      <TopMenu />
      <ArticleForm />
      <List/>
    </React.Fragment>
  );
}

export default App;
