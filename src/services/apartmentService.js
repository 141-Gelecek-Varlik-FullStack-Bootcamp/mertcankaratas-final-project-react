import axios from "axios";

export default class ApartmentService{
    addApartment(values){
        return axios.post("https://localhost:44331/api/apartment/add",values);
    }

    deleteApartment(values){
        return axios.put("https://localhost:44331/api/apartment/delete",values);
    }

    updateApartment(values){
        return axios.put("https://localhost:44331/api/apartment/update",values);
    }


    getApartment(){
        return axios.get("https://localhost:44331/api/apartment/getall");
    }

    getById(id){
        return axios.get("https://localhost:44331/api/apartment/getbyid?id=" + id);
    }
    
}