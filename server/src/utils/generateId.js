export function generateUniqueId(users) {
  const ids = users.map((user) => user.id);
  const maxId = Math.max(...ids, 0);
  return maxId + 1;
}
