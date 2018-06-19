const users = [
  {
    id: 1,
    username: "veysel",
  },
  {
    id: 2,
    username: "hasan",
  },
  {
    id: 3,
    username: "burak",
  },
];

const user = users.find(item => item.username === "veysel");
console.log(user);
