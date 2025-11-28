


module.exports = {
  ...(typeof createLoginTracker !== 'undefined' && { createLoginTracker })
};
function createLoginTracker(userInfo) {
  let attemptCount = 0;

  const loginAttempt = (passwordAttempt) => {
    attemptCount++;

    if (attemptCount > 3) {
      return "Account locked due to too many failed login attempts";
    }

    if (passwordAttempt === userInfo.password) {
      return "Login successful";
    } else {
      return `Attempt ${attemptCount}: Login failed`;
    }
  };

  return loginAttempt;
}

// Example usage:
const tracker = createLoginTracker({ username: "Alvin", password: "secure123" });

console.log(tracker("wrongpass")); // Attempt 1: Login failed
console.log(tracker("12345"));     // Attempt 2: Login failed
console.log(tracker("test"));      // Attempt 3: Login failed
console.log(tracker("secure123")); // Account locked due to too many failed login attempts