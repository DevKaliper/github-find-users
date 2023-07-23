const getUser = (user) => {
  return fetch("https://api.github.com/users/" + user)
    .then((response) => response.json())
    .then((data) => data)
    .catch((error) => console.log(error));
};

export default { getUser };
