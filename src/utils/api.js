// ISSUE-5: fetch() with no .catch() or error handling — silent failures
function getUserData(userId) {
  return fetch(`https://api.example.com/users/${userId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log("User data:", data);
      return data;
    });
}

module.exports = { getUserData };
