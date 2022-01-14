import axios from "axios";

export default class InvoiceTypeService{
    addInvoice(values){
        return axios.post("https://localhost:44331/api/invoice/add",values);
    }

    deleteInvoice(values){
        return axios.put("https://localhost:44331/api/invoice/delete",values);
    }

    updateInvoice(values){
        return axios.put("https://localhost:44331/api/invoice/update",values);
    }


    getInvoice(){
        return axios.get("https://localhost:44331/api/invoice/getall");
    }

    getById(id){
        return axios.get("https://localhost:44331/api/invoice/getbyid?id=" + id);
    }






  
    
}