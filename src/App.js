import React from "react";
import "./App.css";
import List from "./components/List/List";
import ArticleForm from "./components/ArticleForm/ArticleForm";
import TopMenu from "./components/topMenu/index";
import { connect } from "react-redux";
import { addTodo, getAuthors } from "./store/actions";
const mapStateToProps = state => {
  //console.log("STATE", state);
  return { reduxState: state };
};
const mapDispatchToProps = dispatch => {
  return {
    createTodo: info => {
      dispatch(addTodo(info));
    },
    getListOfAuthors: () => {
      dispatch(getAuthors());
    }
  };
};
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      appState: this.props.reduxState
    };
  }
  componentDidMount() {
    console.log(this.props, "ALL PROPS");
    this.props.getListOfAuthors();
  }
  render() {
    return (
      <React.Fragment>
        <TopMenu />
        <ArticleForm />
        <List />
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
