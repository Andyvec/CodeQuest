import React from 'react'
import { Message } from 'semantic-ui-react'

export default class Messages extends React.Component {

  render() {
    return (
        <section>
          <Message
            icon='exclamation triangle'
            header='¡Que poco serio!'
            content='Todo lo que podés observar son prototipos tempranos de funcionalidades diversas. La versión final será súmamente diferente.'
          />
        </section>
    );
  }
}