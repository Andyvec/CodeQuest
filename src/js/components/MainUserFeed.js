import React from 'react'
import { Feed, Popup } from 'semantic-ui-react'

export default class MainUserFeed extends React.Component {

  render() {
    const imageSrc = '/image/avatar/dwarf.png'

    return (
      <Feed size='small' className='mainuser-feed'>
        <Feed.Event>
          <Popup
            trigger = { <Feed.Label image={imageSrc} /> }
            content = '¡Que chulo me veo!'
          />
        <Feed.Content>
          <Feed.Date className='white-text'>¡Buen día!</Feed.Date>
          <Feed.Summary className='white-text'>
          Usuario de prueba
          </Feed.Summary>
        </Feed.Content>
        </Feed.Event>
      </Feed>
    );
  }
}