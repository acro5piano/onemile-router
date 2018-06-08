export const RouteMap = [
  { path: '/', component: Dashboard, as: 'HOME' },
  { path: '/messages', component: MessageThreadList, as: 'MESSAGE_THREADS' },
]

export const route = (alias: string): string => {
  const route = RouteMap.find(r => r.as === alias)
  if (!route) {
    throw new Error('No matching Route')
  }
  return route.path
}


