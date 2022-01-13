import axios from "axios";

export default class PaymentService{
    getPayments(){
        return axios.get("https://localhost:44331/api/payment/getall");
    }

    getById(id){
        return axios.get("https://localhost:44331/api/payment/getbyid?id=" + id);
    }

    addPayment(values){
        return axios.post("https://localhost:44331/api/payment/add",values);
        
    }

    deletePayment(values){
        return axios.put("https://localhost:44331/api/payment/delete",values);
    }

    updatePayment(values){
        return axios.put("https://localhost:44331/api/payment/update",values);
    }




}