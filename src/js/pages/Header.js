import React from "react";
import { Message } from 'semantic-ui-react'

import Navigation from "./Navigation"

export default class Header extends React.Component {
  render() {
    return (
      <header>
        <Navigation/>
      </header>
    );
  }
}