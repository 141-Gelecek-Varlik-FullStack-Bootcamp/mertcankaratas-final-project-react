import axios from "axios";

export default class PaymentService{
    getPayments(){
        return axios.get("https://localhost:44331/api/payment/getall");
    }

    getById(id){
        return axios.get("https://localhost:44331/api/payment/getbyid?id=" + id);
    }

}