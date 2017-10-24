import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

import environment from '../Environment';

let tempID = 0;

const mutation = graphql`
  mutation createCatMutation($input: CreateCatInput!) {
    createCat(input: $input) {
      edge {
        cursor
        node {
          id
          fullName
          nickname
          imageUrl
          isShwifty
        }
      }
      clientMutationId
    }
  }
`;

const createCat = (viewerId, { nickname, fullName, imageUrl }) => {
  const variables = {
    input: {
      clientMutationId: '12345',
      imageUrl,
      nickname,
      fullName
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    updater: proxyStore => {
      const createCatField = proxyStore.getRootField('createCat');
      const newCat = createCatField.getLinkedRecord('edge');
      const viewerProxy = proxyStore.get(viewerId);
      const connection = ConnectionHandler.getConnection(
        viewerProxy,
        'CatList_allCats'
      );
      if (connection) {
        ConnectionHandler.insertEdgeAfter(connection, newCat);
      }
    },
    onCompleted: (response, errors) => {
      console.log(response);
    },
    onError: err => console.error(err)
  });
};

export default createCat;
