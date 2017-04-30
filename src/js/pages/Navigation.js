import React, { Component }  from 'react'
import { Menu, Button, Feed } from 'semantic-ui-react'

import MainUserFeed from './../components/MainUserFeed.js'

export default class Navigation extends Component {
  state = { activeItem: 'Spawn' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='small' fixed='top' stackable inverted>
        <Menu.Item header>CodeQuest</Menu.Item>

        <Menu.Item name='Inicio'
          active={activeItem === 'Spawn'}
          onClick={this.handleItemClick} />

        <Menu.Item name='Tabern'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick} />

        <Menu.Item name='PJ Customization'
          active={activeItem === 'messages'}
          onClick={this.handleItemClick} />
          
        <Menu.Menu position='right'>
            <MainUserFeed />
        </Menu.Menu>

      </Menu>
    )
  }
  
}