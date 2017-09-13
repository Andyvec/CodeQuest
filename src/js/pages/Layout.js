import React from 'react'
import { Grid } from 'semantic-ui-react'

import Header from "./Header"
import Messages from "./../components/Messages"
import Footer from "./Footer"
import QuestList from "./../components/QuestList"

import questStore from './../stores/QuestStore'

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
                <PagesRouter/>
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