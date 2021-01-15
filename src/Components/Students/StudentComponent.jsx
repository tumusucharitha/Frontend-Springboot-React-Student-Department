import React, {Component} from 'react'
import StudentService from './StudentService'

class StudentComponent extends Component{
    constructor(props){
        super(props)
       
        this.state={
            message:'',
            students:[
                // {id: '1',
                // first_name:'hjkl',
                // last_name:'fghjk',
                // mobile_number:'456789',
                // date_of_joining:'2012/11/12',
                // department:'fghjk'}
            ]
        }
        this.refreshStudents = this.refreshStudents.bind(this);
        this.addStudentClicked = this.addStudentClicked.bind(this)
    }

    componentDidMount(){
        this.refreshStudents();
    }

    addStudentClicked(){
        StudentService.addStudent()
        .then()
        .catch()
    }

    refreshStudents(){
        StudentService.reteieveAllStudents()
        .then(response=>{
                console.log(response.data)
                this.setState({
                    students: response.data
                })
            })
    }

    render(){
        return(
            <div>I
                
            <div className="Container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>RollNumber</th>
                            <th>FirstName</th>
                            <th>LastName</th>
                            <th>JoiningDate</th>
                            <th>MobileNumber</th>
                            <th>Department</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.students.map(student=>
                            <tr>
                                <td>{student.id}</td>
                                <td>{student.first_name}</td>
                                <td>{student.last_name}</td>
                                <td>{student.date_of_joining}</td>
                                <td>{student.mobile_number}</td>
                                <td>{student.dept_name}</td>                                
                            </tr>
                            )
                        }
                    </tbody>
                </table>
                <div className="row">
                    <button className="btn btn-success" onClick={this.addStudentClicked}>Add Student</button>
                </div>
            </div>
            </div>
        );
    }
}

export default StudentComponent