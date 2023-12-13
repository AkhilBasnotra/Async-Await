let posts = [
  { title: "Post one", body: "this is post one" },
  { title: "Post two", body: "this is post two" },
];

let lastActivityTime = new Date();

function getPosts() {
  setTimeout(() => {
    let output = "";
    posts.forEach((post) => {
      output += `<li>${post.title}</li>`;
      document.body.innerHTML = output;
    });
  }, 1000);
}

function createPost(post) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      posts.push(post);

      let error = false;

      if (!error) {
        resolve();
      } else {
        reject("Error: Something went wrong");
      }
    }, 2000);
  });
}

function deletePost() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (posts.length !== 0) {
        resolve(posts.pop());
      } else {
        reject("Array is empty");
      }
    }, 1000);
  });
}

function updateLastUserActivityTime() {
  return new Promise((resolve) => {
    setTimeout(() => {
      lastActivityTime = new Date();
      resolve(lastActivityTime);
    }, 1000);
  });
}

async function main() {
  try {
    // Create a new post and update last activity time
    await Promise.all([
      createPost({ title: "New Post", body: "this is a new post" }),
      updateLastUserActivityTime(),
    ]);

    // Log posts and last activity time
    console.log("Posts:", posts);
    console.log("Last Activity Time:", lastActivityTime);

    // Delete the last post
    const deletedPost = await deletePost();
    console.log("Deleted Post:", deletedPost);
    console.log("Remaining Posts:", posts);
  } catch (error) {
    console.error(error);
  }
}

main();
