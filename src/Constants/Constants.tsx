export const CONTRACT_ADDRESS = "0x4d68171774dedcefcea24e0b4df961d4e369bfaf";
export const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "todoId",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "todoItem",
        type: "string",
      },
    ],
    name: "TodoAdded",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "todoId",
        type: "uint256",
      },
    ],
    name: "TodoCompleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "todoId",
        type: "uint256",
      },
    ],
    name: "TodoDeleted",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "uint256",
        name: "todoId",
        type: "uint256",
      },
    ],
    name: "TodoUncompleted",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_todoItem",
        type: "string",
      },
    ],
    name: "addTodo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_todoId",
        type: "uint256",
      },
    ],
    name: "completeTodo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_todoId",
        type: "uint256",
      },
    ],
    name: "deleteTodo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_todoId",
        type: "uint256",
      },
    ],
    name: "uncompleteTodo",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "viewTodos",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "todoId",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "todoItem",
            type: "string",
          },
          {
            internalType: "bool",
            name: "isCompleted",
            type: "bool",
          },
          {
            internalType: "bool",
            name: "isDeleted",
            type: "bool",
          },
        ],
        internalType: "struct SimpleTodo.TODO[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
