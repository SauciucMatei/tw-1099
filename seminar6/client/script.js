const getUser = async () => {
  try {
    const response = await fetch("http://127.0.0.1:3000/users");

    const data = await response.json();

    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

const getUser2 = () => {
  fetch("http://127.0.0.1:3000/users")
    .then((response) => response.json())
    .then((data) => console.log(data))
    .catch((error) => console.log(error));
};

getUser2();
