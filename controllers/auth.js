exports.register = (rew, res, next) => {
  res.send("Register Route");
};

exports.login = (rew, res, next) => {
  res.send("Login Route");
};

exports.forgotPassword = (rew, res, next) => {
  res.send("Forgot Password Route");
};

exports.resetPassword = (rew, res, next) => {
  res.send("Reset Password Route");
};
