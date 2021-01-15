import axios from 'axios';

class StudentService{
    reteieveAllStudents(){
        return axios.get(`http://localhost:8081/getStudentByDept`);
    }

    reteieveStudentById(id){
        return axios.get(`http://localhost:8081/getStudent/${id}`);
    }

    deleteStudent(id){
        return axios.delete(`http://localhost:8081/deleteStudent/${id}`)
    }

    updateStudentt(id, student){
        return axios.put(`http://localhost:8081/updateStudent/${id}`, student)
    }

    addStudent(student){
        return axios.post(`http://localhost:8081/addStudent`, student)
    }
}

export default new StudentService();