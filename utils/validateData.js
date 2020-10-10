export function validateData(data) {
  const { email, name, password, confirmedPassword } = data;
  const regex = /[\w\.]{3,}@[\w\.-]{3,}\..*/;
  if (email?.match(regex)) {
    if (
      password.length > 7 &&
      password === confirmedPassword &&
      name.length > 1
    ) {
      return { error: null };
    } else {
      return { error: 'Check the passwords or the name' };
    }
  } else {
    return { error: 'Invalid email' };
  }
}
