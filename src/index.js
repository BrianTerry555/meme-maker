//Imports React
import React from "react";
import ReactDOM from "react-dom";

//Gets the thing that provides the store to your App
import { Provider } from "react-redux";

//Gets the thing that makes the store
import { createStore } from "redux";

//Gets reducer to handle state
import reducers from "./reducers/";

//import css
import "./css/index.css";

//import components
import Header from "./components/header.js";
import FormContainer from "./containers/form-container.js";
import MemeContainer from "./containers/meme-container.js";

//make the store
const store = createStore(reducers);

class App extends React.Component {
  render() {
    return (
      <div>
        <div className="header">
          <Header />
        </div>
      <div className="container">
          <div className="row">
            <div className="col-md-6">
              <FormContainer />
            </div>
            <div className="col-md-6">
              <MemeContainer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

//give store to the App through Provider
ReactDOM.render(<Provider store={store}><App/></Provider>, document.querySelector("#root"));
