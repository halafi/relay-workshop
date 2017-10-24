/**
 * @flow
 * @relayHash 2a3fc8bea42ef4d948aead9d47d128c6
 */

/* eslint-disable */

'use strict';

/*::
import type {ConcreteBatch} from 'relay-runtime';
export type updateCatMutationVariables = {|
  input: {
    fullName?: ?string;
    id: string;
    imageUrl?: ?string;
    isShwifty?: ?boolean;
    nickname?: ?string;
    clientMutationId: string;
  };
|};
export type updateCatMutationResponse = {|
  +updateCat: ?{|
    +cat: ?{|
      +id: string;
      +fullName: ?string;
      +nickname: string;
      +imageUrl: string;
      +isShwifty: ?boolean;
    |};
    +clientMutationId: string;
  |};
|};
*/


/*
mutation updateCatMutation(
  $input: UpdateCatInput!
) {
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
*/

const batch /*: ConcreteBatch*/ = {
  "fragment": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateCatInput!",
        "defaultValue": null
      }
    ],
    "kind": "Fragment",
    "metadata": null,
    "name": "updateCatMutation",
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "args": [
          {
            "kind": "Variable",
            "name": "input",
            "variableName": "input",
            "type": "UpdateCatInput!"
          }
        ],
        "concreteType": "UpdateCatPayload",
        "name": "updateCat",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Cat",
            "name": "cat",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "fullName",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "nickname",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "imageUrl",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "isShwifty",
                "storageKey": null
              }
            ],
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
  "name": "updateCatMutation",
  "query": {
    "argumentDefinitions": [
      {
        "kind": "LocalArgument",
        "name": "input",
        "type": "UpdateCatInput!",
        "defaultValue": null
      }
    ],
    "kind": "Root",
    "name": "updateCatMutation",
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
            "type": "UpdateCatInput!"
          }
        ],
        "concreteType": "UpdateCatPayload",
        "name": "updateCat",
        "plural": false,
        "selections": [
          {
            "kind": "LinkedField",
            "alias": null,
            "args": null,
            "concreteType": "Cat",
            "name": "cat",
            "plural": false,
            "selections": [
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "id",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "fullName",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "nickname",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "imageUrl",
                "storageKey": null
              },
              {
                "kind": "ScalarField",
                "alias": null,
                "args": null,
                "name": "isShwifty",
                "storageKey": null
              }
            ],
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
  "text": "mutation updateCatMutation(\n  $input: UpdateCatInput!\n) {\n  updateCat(input: $input) {\n    cat {\n      id\n      fullName\n      nickname\n      imageUrl\n      isShwifty\n    }\n    clientMutationId\n  }\n}\n"
};

module.exports = batch;
