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
