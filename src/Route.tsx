import * as React from 'react'

interface RouteTransition {
  from: string
  to: string
}

interface RouterProps {
  path: string
  component: any
  onRouteChange?: (routeTransition: RouteTransition) => void
}

interface RoutesState {
  key: string
}

export class Route extends React.Component<RouterProps, RoutesState> {
  render() {
    const Component = this.props.component
    return <Component {...this.props} />
  }
}
