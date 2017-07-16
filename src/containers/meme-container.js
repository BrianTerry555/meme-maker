import React from "react";

//get the 'connect' to connect react to the store
import { connect } from "react-redux";

//get 'bindActionCreator' to bind the 'this' to the store
import { bindActionCreators } from "redux";

//get 'actionCreators' to put all the actions in an object
import * as actionCreators from "../actions/"

//Import components
import Meme from "../components/meme.js";


class MemeContainer extends React.Component {
  render() {
    return (
        <Meme top={this.props.top} bottom={this.props.bottom} url={this.props.url}/>
    );
  }
}

//map our data fromm store to props
const mapStateToProps = (state) => {
  return state;
}

//take all oour (actions = actionCreators) and map themto props
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators(actionCreators, dispatch);
}

//connect store to MemeContainer
export default connect(mapStateToProps, mapDispatchToProps)(MemeContainer);
