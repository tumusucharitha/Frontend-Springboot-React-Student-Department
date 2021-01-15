import axios from 'axios';

class DepartmentService{
    reteieveAllDepartments(){
        return axios.get(`http://localhost:8080/getdepts`);
    }

    reteieveDepartmentById(id){
        return axios.get(`http://localhost:8080/getdept/${id}`);
    }

    deleteDepartment(id){
        return axios.delete(`http://localhost:8080/deletedept/${id}`)
    }

    updateDepartment(id, dept){
        return axios.put(`http://localhost:8080/updatedept/${id}`, dept)
    }

    addDepartment(dept){
        return axios.post(`http://localhost:8080/adddept`, dept)
    }
}

export default new DepartmentService();