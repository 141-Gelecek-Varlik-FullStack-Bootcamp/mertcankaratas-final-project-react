import axios from "axios";

export default class CreditCardService{
    payment(values){
        return axios.post("https://localhost:44386/api/creditcard/addcreditcard",values);
    }

  
    
}