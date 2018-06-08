import * as React from 'react'
import { Router, Route } from '../../src'
import Dashboard from './Dashboard'
import Message from './Message'

interface ExampleSimpleState {
  router: any
}

export default class ExampleSimple extends React.Component<{}, ExampleSimpleState> {
  state = {
    router: new Router(),
  }

  onRouteChange = ({ from, to }) => {
    console.log(from)
    console.log(to)
  }

  render() {
    return (
      <Router router={this.state.router} onRouteChange={this.onRouteChange} >
        <Route path="/" component={Dashboard} />
        <Route path="/message" component={Message} />
      </Router>
    )
  }
}
