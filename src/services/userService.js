import axios from "axios";

export default class UserService{
    addUser(values){
        return axios.post("https://localhost:44331/api/auth/register",values);
    }

    deleteUser(values){
        return axios.put("https://localhost:44331/api/user/update",values);
    }

    updateUser(values){
        return axios.put("https://localhost:44331/api/user/update",values);
    }
    
    getUsers(){
        return axios.get("https://localhost:44331/api/user/getall");
    }

    getById(id){
        return axios.get("https://localhost:44331/api/user/getbyid?id=" + id);
    }

  
    
}