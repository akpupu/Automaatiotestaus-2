export function validateEmail(email) {
  if (typeof email !== "string") return false;

  // RegEx varmistaa, että osoitteessa on: [tekstiä] @ [tekstiä] . [tekstiä]
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function validatePassword(password) {
  return typeof password === "string" && password.length >= 8;
}

export function validateAge(age) {
  return Number.isInteger(age) && age >= 16 && age <= 120;
}
