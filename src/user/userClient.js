import fetchJSON from "../fetchJSON.js";

const user = (async() =>{
  const token = localStorage.getItem('token');
  return token ? await fetchJSON(`/get-user?token=${localStorage.getItem('token')}`) : null;
})();
export default {
  async getCurrentUser(){
    return await user;
  }
}
