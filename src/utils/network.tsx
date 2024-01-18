import axios from "axios";

const userToken = localStorage.getItem('talenvoJwToken');

const networkInstance = axios.create({
  baseURL: `${process.env.REACT_APP_ROOT_URL}`,
  headers: {
    Authorization: `Bearer ${userToken}`,
  },
});

export default networkInstance;
