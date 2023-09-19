export async function getUser(req, res) {
  const userData = req.user;
  res.json(userData);
}
