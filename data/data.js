const chats = [
  {
    isGroupChat: false,
    users: [
      {
        name: "Deepu Doe",
        email: "DeepuDoe@example.com",
      },
      {
        name: "Deepanshu",
        email: "Deepanshu@example.com",
      },
    ],
    _id: "617a077e18c25468bc7c4dd4",
    chatName: "Deepu Doe",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Rohit",
        email: "Rohit@example.com",
      },
      {
        name: "Himanshu",
        email: "Himanshu@example.com",
      },
    ],
    _id: "617a077e18c25468b27c4dd4",
    chatName: "Rohit",
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Anthony",
        email: "anthony@example.com",
      },
      {
        name: "Sujal",
        email: "Sujal@example.com",
      },
    ],
    _id: "617a077e18c2d468bc7c4dd4",
    chatName: "Anthony",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Deepu Doe",
        email: "DeepuDoe@example.com",
      },
      {
        name: "Deepanshu",
        email: "Deepanshu@example.com",
      },
      {
        name: "Rohit",
        email: "Rohit@example.com",
      },
    ],
    _id: "617a518c4081150716472c78",
    chatName: "Friends",
    groupAdmin: {
      name: "Rohit",
      email: "Rohit@example.com",
    },
  },
  {
    isGroupChat: false,
    users: [
      {
        name: "Krish",
        email: "Krish@example.com",
      },
      {
        name: "Dishu",
        email: "Dishu@example.com",
      },
    ],
    _id: "617a077e18c25468bc7cfdd4",
    chatName: "Krish",
  },
  {
    isGroupChat: true,
    users: [
      {
        name: "Deepu Doe",
        email: "DeepDoe@example.com",
      },
      {
        name: "Deepanshu",
        email: "Deepanshu@example.com",
      },
      {
        name: "Rohit",
        email: "Rohit@example.com",
      },
    ],
    _id: "617a518c4081150016472c78",
    chatName: "Chill Zone",
    groupAdmin: {
      name: "Rohit",
      email: "Rohit@example.com",
    },
  },
];
module.exports = {chats}; 