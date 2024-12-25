interface User {
    name: string;
    id: number;
    isAdmin: boolean;
  }

  let newUser: User = {
    name: "Jane",
    id: 1,                   // Advantage of type system we can write 1 directly instead of "1".
    isAdmin: false
};