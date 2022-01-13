import axios from "axios";

export default class AuthService{
    login(values){
        return axios.get("https://localhost:44331/api/auth/login",values);
    }

  
    
}