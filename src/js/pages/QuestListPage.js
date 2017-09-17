import React from 'react'
import QuestList from './../components/QuestList'
import questStore from './../stores/QuestStore'

export default class QuestListPage extends React.Component {

  render() {
    return (
      <QuestList store={questStore} />
    );
  }
}