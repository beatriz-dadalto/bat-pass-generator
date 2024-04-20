export default function generatePassword(passwordLength: number): string {
  let password = '';
  let characters = '@#$?%!*ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz';

  for (let index = 0; index < passwordLength; index++) {
    password += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return password;
}