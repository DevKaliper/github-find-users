class error404 extends Error {
  constructor(message) {
    super(message);
    this.name = "error404";
  }
}

const getUser = (user) => {
  return fetch("https://api.github.com/users/" + user)
    .then((response) => {
        if(response.status === 404) {throw new error404("Usuario no encontrado")}
        return response.json()})
    .then((data) => data)
    
};

export default { getUser };
