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
        isFollowed
      }
      clientMutationId
    }
  }
`;

const updateCat = (id, isFollowed) => {
  const variables = {
    input: {
      id,
      isFollowed,
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
