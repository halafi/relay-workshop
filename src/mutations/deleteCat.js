import { commitMutation, graphql } from 'react-relay';
import { ConnectionHandler } from 'relay-runtime';

import environment from '../Environment';

const mutation = graphql`
  mutation deleteCatMutation($input: DeleteCatInput!) {
    deleteCat(input: $input) {
      deletedId
      clientMutationId
    }
  }
`;

const deleteCat = (viewerId, id) => {
  const variables = {
    input: {
      id,
      clientMutationId: 'abcde'
    }
  };

  commitMutation(environment, {
    updater: proxyStore => {
      const deleteField = proxyStore.getRootField('deleteCat');
      const deletedId = deleteField.getValue('deletedId');
      const viewerProxy = proxyStore.get(viewerId);
      const connection = ConnectionHandler.getConnection(
        viewerProxy,
        'CatList_allCats'
      );

      if (connection) {
        ConnectionHandler.deleteNode(connection, deletedId);
      }
    },
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log(response);
    },
    onError: err => console.error(err)
  });
};

export default deleteCat;
