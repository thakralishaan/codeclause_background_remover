import React, { Component } from "react";

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="footer">
          <div className="container">
            <span className="text-muted">Made with <i className="fa fa-heart heart"/> by Ishaan Thakral</span>
          </div>
        </footer>
      </div>
    );
  }
}