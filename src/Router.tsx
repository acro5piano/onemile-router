import React from 'react'

interface RoutesProps {
  path: string
  component: any
  router: any
}

interface RoutesState {
  key: string
}

export class Router extends React.Component<RoutesProps, RoutesState> {

}
