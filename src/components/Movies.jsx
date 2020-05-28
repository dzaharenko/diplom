import React, {Component} from "react";
import {Route, Switch} from "react-router-dom";

import Catalog from "./Catalog";
import '../styles/components/Cart.css';

const NotFound = () => {
  return <h3>404 - Not found</h3>;
};

export default class Movies extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className="content container_w940">
        <Switch>
          <Route path="/" exact><Catalog data={this.props.data} {...this.props} /></Route>
          <Route path="/film/:id"><Catalog data={this.props.data} {...this.props} /></Route>
          <Route path="*" component={NotFound} />
        </Switch>
      </section>
    );
  }
}
