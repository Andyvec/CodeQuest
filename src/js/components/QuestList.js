import React from 'react'
import { Accordion, Segment, Checkbox, Input, Grid, Button, Icon } from 'semantic-ui-react'
import { observer } from "mobx-react"

@observer
export default class QuestList extends React.Component {
  filter(e) {
    this.props.store.titleFilter = e.target.value
  }

  render() {
    const {quests, titleFilter, filteredQuest} = this.props.store;

    const questList = filteredQuest.map(quest => ({
      title: <Checkbox label={quest.title}/>,
      content: quest.content,
      key: 'panel-'+quest.id
    }))

    return (
      <section>
        <div id="filter-container">
          <Segment color='brown'>
            <Grid columns={4} verticalAlign='middle'>
              <Grid.Column>
                <Input icon='search' placeholder='Buscar...' value={titleFilter} onChange={this.filter.bind(this)}  />
              </Grid.Column>
              <Grid.Column>
                 <Checkbox label='Filtrar finalizadas' />
              </Grid.Column>
              <Grid.Column />
              <Grid.Column textAlign='right'>
                 <Button content='Nueva Quest' icon='plus square outline' labelPosition='right' />
              </Grid.Column>
            </Grid>
          </Segment>
        </div>
        <div id="quest-container">
          <Accordion panels={questList} fluid styled />
        </div>
      </section> 
    );
  }
}