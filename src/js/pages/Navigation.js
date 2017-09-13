import React, { Component }  from 'react'
import { Menu, Button, Feed } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

import MainUserFeed from './../components/MainUserFeed.js'

export default class Navigation extends Component {

  render() {

    return (
      <Menu size='small' fixed='top' stackable inverted>
        <Menu.Item header>CodeQuest</Menu.Item>

        <Menu.Item name='Inicio' as={Link} to='/'/>

        <Menu.Item name='Aventuras' as={Link} to='/aventuras'/>

        <Menu.Item name='Shop' as={Link} to='/shop'/>

        <Menu.Item name='Configuracion' as={Link} to='/configuracion'/>
          
        <Menu.Menu position='right'>
            <MainUserFeed />
        </Menu.Menu>

      </Menu>
    )
  }
  
}