import React, { Component } from "react";

export default class NevBar extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark fixed-top">
          <a
            id="ntxt"
            className="navbar-brand col-sm-3 col-md-2 mr-0 align-items-center"
            href="#"
          >
            Pokédex
          </a>
        </nav>
      </div>
    );
  }
}
