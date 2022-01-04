import axios from "axios";

export default class ProductService{
    getPayments(){
        return axios.get("https://localhost:44331/api/payment/getall");
    }
}