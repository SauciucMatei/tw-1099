const promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const status = true;

    if (status) {
      resolve("Operation succeded");
    } else {
      reject(new Error("Error message"));
    }
  }, 2000);
});

async function f() {
  let promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("done!");
    }, 1000);
  });
  promise
    .then((message) => console.log(message))
    .catch((error) => console.log(error));
}

f();
