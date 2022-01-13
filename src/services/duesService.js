import axios from "axios";

export default class DuesService {
    addDues(values) {
        return axios.post("https://localhost:44331/api/dues/add", values);
    }

    deleteDues(values) {
        return axios.put("https://localhost:44331/api/invoice/delete", values);
    }

    updateDues(values) {
        return axios.put("https://localhost:44331/api/dues/update", values);
    }


    getInvoice() {
        return axios.get("https://localhost:44331/api/dues/getall");
    }

    getById(id) {
        return axios.get("https://localhost:44331/api/dues/getbyid?id=" + id);
    }

}