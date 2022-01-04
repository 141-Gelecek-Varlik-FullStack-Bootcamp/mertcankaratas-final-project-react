import axios from "axios";

export default class ProductService{
    getPayments(){
        return axios.get("https://localhost:44303/api/product/getall");
    }
}