import React, {Component} from 'react'
import DepartmentService from './DepartmentService'
import { ErrorMessage, Field, Form, Formik } from 'formik'

class EditDepartment extends Component{
    constructor(props){
        super(props)

        this.state={
                 id:this.props.match.params.id,
                 name:'',
                 hod:''
        }
        this.onSubmit = this.onSubmit.bind(this);
        this.validate = this.validate.bind(this);
    }

    componentDidMount(){
        if(this.state.id === "-1"){
            return;
        }
        else{
            DepartmentService.reteieveDepartmentById(this.state.id)
            .then(
                response=>
                    this.setState({
                        name: response.data.name,
                        hod: response.data.hod
                    })
            )
            .catch()
        }
    }

    onSubmit(values){
        console.log("Inside onSubmit values are:: "+values)
        let deptemp = {
            dept_id: this.state.id,
            name: values.name,
            hod: values.hod
        }

        if(this.state.id === "-1"){
            DepartmentService.addDepartment(deptemp)
            .then(()=>{this.props.history.push('/departments')})
        }
        else{
            DepartmentService.updateDepartment(this.state.id,deptemp)
            .then(()=>{  this.props.history.push('/departments')})
            .catch()
        }
    }
  
    validate(values){
        let errors={}

        if(!values.name){
            errors.name='Enter a Branch name'
        }else if(values.name.length<2){
            errors.name='Enter a Branch of atleast 2 characters'
        }

        if(!values.hod){
            errors.name='Enter HOD name for the branch'
        }
        return errors
    }
   
    render(){
        let name = this.state.name
        let hod = this.state.hod

        return(
            <div>
                <h1>Update or Create a Department</h1>
                <div class="container">
                    <Formik
                        initialValues={{name, hod}}
                        onSubmit = {this.onSubmit}
                        validate = {this.validate}
                        validateOnChange={false}
                        validationOnBlur={false}
                        enableReinitialize={true}
                    >
                        {
                            (props)=>(
                                <Form>
                                    <ErrorMessage name="name" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="hod" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Name</label>
                                        <Field className="form-control" type="text" name="name" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>HOD</label>
                                        <Field className="form-control" type="text" name="hod" />
                                    </fieldset>

                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )
                        }
                    </Formik>
                </div>
            </div>
        );
    }
}
 
export default EditDepartment;