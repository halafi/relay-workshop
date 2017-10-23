/**
 * @flow
 * @relayHash 6b8f412cf678e45e794c93cbde4dd5bd
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type deleteCatMutationVariables = {|
  input: {
    id: string;
    clientMutationId: string;
  };
|};
export type deleteCatMutationResponse = {|
  +deleteCat: ?{|
    +deletedId: ?string;
    +clientMutationId: string;
  |};
|};
*/


/*
mutation deleteCatMutation(
  $input: DeleteCatInput!
) {
  deleteCat(input: $input) {
    deletedId
    clientMutationId
  }
}
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteCatInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "deleteCatMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeleteCatInput!"
          }
        ],
        "concreteType": "DeleteCatPayload",
        "name": "deleteCat",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation"
  },
  "id": null,
  "kind": "Batch",
  "metadata": {},
  "name": "deleteCatMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "DeleteCatInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "deleteCatMutation",
    "operation": "mutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "DeleteCatInput!"
          }
        ],
        "concreteType": "DeleteCatPayload",
        "name": "deleteCat",
        "plural": false,
        "selections": [
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "deletedId",
            "storageKey": null
          },
          {
            "kind": "ScalarField",
            "alias": null,
            "args": null,
            "name": "clientMutationId",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "text": "mutation deleteCatMutation(\n  $input: DeleteCatInput!\n) {\n  deleteCat(input: $input) {\n    deletedId\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
