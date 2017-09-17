import React from 'react'
import { Grid } from 'semantic-ui-react'
import { Switch, Route } from 'react-router-dom'

import HomePage from './HomePage'
import ShopPage from './ShopPage'
import QuestListPage from './QuestListPage'
import ConfigurationPage from './ConfigurationPage'
import NotFoundPage from './NotFoundPage'

import Header from './../components/Header'
import Messages from './../components/Messages'
import Footer from './../components/Footer'

import Conf from './../components/QuestList'

export default class Layout extends React.Component {

  render() {
    const title = "Bienvenido"

    return (
      <div>
        <Header title={title} />

        <Grid divided='vertically' id="content-grid">
          <Grid.Row columns={1}>
            <Grid.Column>
              <Messages />
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1}>
            <Grid.Column>
              <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path='/quests' component={QuestListPage}/>
                <Route path='/shop' component={ShopPage}/>
                <Route path='/configuration' component={ConfigurationPage}/>
                <Route component={NotFoundPage}/>
              </Switch>
            </Grid.Column>
          </Grid.Row>

          <Grid.Row columns={1} textAlign='center'>
            <Grid.Column>
                <Footer />
            </Grid.Column>
          </Grid.Row>
        </Grid>

      </div>
    );
  }
}