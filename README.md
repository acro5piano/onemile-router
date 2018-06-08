# Onemile router

A React Router alternative.

Onemile router provides dead simple and easy-to-manage routing.

# Install

(later)

# Example

Note: Onemile router have not published to NPM yet.

```ts
import * as React from 'react'
import { Router, Route } from 'onemile-router'

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


# TODO

- Publish to NPM
- Route parameter
- Provide `withRouter()` HOC
