import React, {Component} from 'react'
import DepartmentService from './DepartmentService'

class DepartmentList extends Component{
    constructor(props){
        super(props)

        this.state={
            message:'',
            depts:[
                // id:1,
                // name:'ECE',
                // hod:'Stevie',
            ]
        }
        this.deleteClicked = this.deleteClicked.bind(this);
        this.refreshDepartments = this.refreshDepartments.bind(this);
        this.updateDeptClicked = this.updateDeptClicked.bind(this);
        this.addDeptClicked = this.addDeptClicked.bind(this);
    }

    componentDidMount(){
        this.refreshDepartments()
    }

    addDeptClicked(){
        this.props.history.push("/department/-1")    
    }

    refreshDepartments(){
        DepartmentService.reteieveAllDepartments()
        .then(
            response=>{
                this.setState({
                    depts: response.data
                })
                console.log('response is ',response.data )
            }
        )
        .catch()
    }

    deleteClicked(id){
        console.log('delete button clicked with id:: '+id)
        DepartmentService.deleteDepartment(id)
        .then(
            response=>{
                this.setState({message: `Deletion of the item ${id} is successfull` });
                this.refreshDepartments()
            }
        )
        .catch()
    }

    updateDeptClicked(id){
        this.props.history.push(`/department/${id}`);
    }

    render(){
        return(
            <div>
                <h1>Department List</h1>
                {this.state.message && <div className="alert alert-successfull">{this.state.message}</div>}
                <div className="Container">
                <table className="table">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>hod</th>
                            <th>update</th>
                            <th>delete</th>
                        </tr>
                    </thead>
                    <tbody>
                            {
                                this.state.depts.map(dept=>
                                    <tr>
                                        <td>{dept.dept_id}</td>
                                        <td>{dept.name}</td>
                                        <td>{dept.hod}</td>
                                        <td><button className="btn btn-warning" onClick={()=>this.updateDeptClicked(dept.dept_id)}>Update</button></td>
                                        <td><button className="btn btn-warning" onClick={()=>this.deleteClicked(dept.dept_id)}>Delete</button></td>
                                    </tr>
                                )
                            }
                    </tbody>
                </table>

                    <div className = "row">
                            <button className="btn btn-success" onClick={this.addDeptClicked}>Add</button>
                    </div>
                </div>
            </div>
        );
    }
}
 
export default DepartmentList;