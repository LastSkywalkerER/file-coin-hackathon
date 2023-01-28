const shouldExist = (env?: string) => {
  if (!env) {
    throw Error('Not enough env')
  }

  return env
}

export const config = {
  isDev: process.env.REACT_APP_DEVELOPMENT ? process.env.REACT_APP_DEVELOPMENT === 'true' : true,
  infura: shouldExist(process.env.REACT_APP_INFURA_API_KEY),
  firebase: process.env.REACT_APP_FIREBASE_API_KEY,
  baseUrl: shouldExist(process.env.REACT_APP_API_BASE_URL),
  contractAddress: process.env.REACT_APP_CONTRACT_ADDRESS,
  chain: process.env.REACT_APP_CHAIN || 'testNet',
}
