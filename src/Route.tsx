import React from 'react'

interface RoutesProps {
  path: string
  component: any
}

interface RoutesState {
  key: string
}

export class Route extends React.Component<RoutesProps, RoutesState> {
  state = {
    key: '',
  }

  componentDidMount() {
    this.props.navigationStore.history.listen(({ key }) => {
      this.setState({ key })
    })
  }

  render() {
    const location = this.props.navigationStore.getLocation()

    const target = RouteMap.find(r => r.path === location.pathname)

    if (!target || !target.component) {
      return <div>404</div>
    }

    return <target.component />
  }
}
