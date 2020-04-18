# isc-krypc-proxy
pseudo proxy for krypc block chain and isc frontend

forwards requests to the KrypCore blockchain and returns response to sender. 

# start
`npm run start`
Then point the ISC_Frontend `REACT_APP_BLOCKCHAIN_URL` environment variable at host / port running the proxy.
