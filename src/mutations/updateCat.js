import { commitMutation, graphql } from 'react-relay';

import environment from '../Environment';

const mutation = graphql`
  mutation updateCatMutation($input: UpdateCatInput!) {
    updateCat(input: $input) {
      cat {
        id
        fullName
        nickname
        imageUrl
        isShwifty
      }
      clientMutationId
    }
  }
`;

const updateCat = (id, isShwifty) => {
  const variables = {
    input: {
      id,
      isShwifty,
      clientMutationId: 'abcd'
    }
  };

  commitMutation(environment, {
    mutation,
    variables,
    onCompleted: (response, errors) => {
      console.log(response);
    },
    onError: err => console.error(err)
  });
};

export default updateCat;
