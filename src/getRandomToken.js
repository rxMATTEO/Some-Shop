import randomNumber from "./getRandomNumber.js";
function getRandomToken() {
  let token = "";
  for (let i = 0; i < 10; i++) {
    token += String.fromCharCode( randomNumber(33,126) );
  }
  return token;
}

export default getRandomToken;