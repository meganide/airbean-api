function validateUserForm(req, res, next) {
  const { username, password } = req.body;
  if (!username || !password) return res.status(400).json({ message: "Email and password are required" });
  const regex = /^[a-zA-ZåäöÅÄÖ]+$/;
  if (!username.match(regex)) return res.status(400).json({ message: "Username can only contain letters" });

  if (password.length < 6) return res.status(400).json({ message: "Password must be at least 6 characters long" });
  if (password.length > 24) return res.status(400).json({ message: "Password must be at most 24 characters long" });

  if (username.length < 3) return res.status(400).json({ message: "Username must be at least 3 characters long" });
  if (username.length > 12) return res.status(400).json({ message: "Username must be at most 12 characters long" });
  return next();
}

export default validateUserForm;
