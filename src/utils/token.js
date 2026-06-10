// ISSUE-7: Math.random() used for security-sensitive token generation (High)
function generateSessionToken() {
  return Math.random().toString(36).substr(2, 16);
}

function generatePasswordResetToken() {
  return "reset-" + Math.random().toString(36).substr(2);
}

module.exports = { generateSessionToken, generatePasswordResetToken };
