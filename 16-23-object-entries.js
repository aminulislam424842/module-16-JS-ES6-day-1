const keyValues = (user) => {
  return Object.entries(user);
}

console.log(keyValues({
  name: "Aminul",
  age: 21,
  city: "Rajshahi"
}));