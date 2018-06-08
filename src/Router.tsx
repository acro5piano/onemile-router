import * as React from 'react'
import _ from 'lodash'
import createHistory, { BrowserHistory } from 'history/createBrowserHistory'

interface RouterTransition {
  from: string
  to: string
}

interface RouterProps {
  onCreate?: (router: Router) => void
  onRouteChange?: (routerTransition: RouterTransition) => void
}

interface RouterState {
  key: string
}

export class Router extends React.Component<RouterProps, RouterState> {
  history: BrowserHistory = createHistory()

  state = {
    key: '',
  }

  push = (path: string) => {
    this.history.push(path)
  }

  componentDidMount() {
    this.onCreate()
    this.history.listen(({ key }) => {
      this.setState({ key })
      this.props.onRouteChange({
        from: key,
        to: key,
      })
    })
  }

  onCreate = () => {
    this.props.onCreate(this)
  }

  render() {
    const { children } = this.props
    const target = _.find(children, r => r.props.path === this.history.location.pathname)

    return target
  }
}
