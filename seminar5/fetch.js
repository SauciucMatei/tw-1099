const getGithubProfile = (username) => {
  fetch(`https://api.github.com/users/${username}`)
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};
const getGithubProfile2 = async (username) => {
  try {
    const response = await fetch(`https://api.github.com/users/${username}`);

    const data = await response.json;
  } catch (error) {
    console.log(error)
  }
};

getGithubProfile2("MihaiAdrianLungu");
