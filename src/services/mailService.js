import axios from "axios";

export default class MailService{
    addMail(values){
        return axios.post("https://localhost:44331/api/invoice/add",values);
    }

    deleteMail(values){
        return axios.put("https://localhost:44331/api/invoice/delete",values);
    }

    updateMail(values){
        return axios.put("https://localhost:44331/api/invoice/update",values);
    }


    getMails(){
        return axios.get("https://localhost:44331/api/invoice/getall");
    }

    getById(id){
        return axios.get("https://localhost:44331/api/invoice/getbyid?id=" + id);
    }






  
    
}