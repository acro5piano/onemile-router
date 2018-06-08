import * as React from 'react'
import { Router } from '../../src/Router'
import { Route } from '../../src/Route'
import Dashboard from './Dashboard'
import Message from './Message'

export default class App extends React.Component<{}, {}> {
  router: Router

  onRouteChange = ({ from, to }) => {
    console.log(from)
  }

  setRouter = (router: Router) => {
    this.router = router
  }

  toDashboard = () => this.router.push('/')

  toMessage = () => this.router.push('/message')

  render() {
    return (
      <div>
        <h1>Onemile router example</h1>

        <Router onCreate={this.setRouter} onRouteChange={this.onRouteChange}>
          <Route path="/" component={Dashboard} />
          <Route path="/message" component={Message} />
        </Router>

        <button onClick={this.toDashboard}>Dashboard</button>
        <button onClick={this.toMessage}>Message</button>
      </div>
    )
  }
}