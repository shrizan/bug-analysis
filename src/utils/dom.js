// ISSUE-3: innerHTML assignment without sanitising userInput — XSS risk
function renderUserBio(userInput) {
  const container = document.getElementById("bio");
  container.innerHTML = userInput;
}

module.exports = { renderUserBio };
