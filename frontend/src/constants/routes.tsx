export enum RoutesNames {
  Mint = 'Mint',
  Collections = 'Collections',
}

export const routes = [
  { name: RoutesNames.Collections, Component: () => <div>{RoutesNames.Collections}</div> },
  { name: RoutesNames.Mint, Component: () => <div>{RoutesNames.Mint}</div> },
]
