// Funcion que se manda como argumento

const getUser = (id, callback) => {
  const usuarios = {
    id,
    name: "Alan",
  };
  setTimeout(() => {
    callback(usuarios);
  }, 1500);
};

getUser(10, (user) => {
  console.log(user);
});
