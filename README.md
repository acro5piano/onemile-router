[![npm version](https://badge.fury.io/js/onemile-router.svg)](https://badge.fury.io/js/onemile-router)

# Onemile router

A React Router alternative.

Onemile router provides dead simple and easy-to-manage routing.

![demo](https://github.com/acro5piano/onemile-router/blob/master/demo.gif)

# Install

```
npm install onemile-router
```

or if you use yarn:

```
yarn add onemile-router
```

# Example

Note: Onemile router have not published to NPM yet.

```ts
import * as React from 'react'
import { Router, Route } from 'onemile-router'

const Dashboard = () => <div>Dashboard</div>
const Message = () => <div>Message</div>

export default class App extends React.Component {
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
```

# TODO

- [x] Publish to NPM
- [ ] Write test
- [ ] Route parameter
- [ ] Provide `withRouter()` HOC
