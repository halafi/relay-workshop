import { Environment, Network, RecordSource, Store } from 'relay-runtime';

// instantiate the store for caching
const store = new Store(new RecordSource());

// network contains information of graphql server
const network = Network.create((operation, variables) => {
  // we use graphcool endpoint
  return fetch('https://api.graph.cool/relay/v1/relay-workshop', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      query: operation.text,
      variables
    })
  }).then(response => {
    return response.json();
  });
});

// combine store and network in one environment variable
const environment = new Environment({
  network,
  store
});

export default environment;
