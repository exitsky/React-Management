import React from 'react';
import { post } from 'axios';
//import axios from 'axios';

/*
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
*/
class CustomerAdd extends React.Component {

    constructor(props) {
      super(props);
      this.state = {
        file: null,
        userName: '',
        birthday: '',
        gender: '',
        job: '',
        fileName: ''
      }
      /* this.handleFormSubmit = this.handleFormSubmit.bind(this)
      this.handleFileChange = this.handleFileChange.bind(this)
      this.handleValueChange = this.handleValueChange.bind(this)
      this.addCustomer = this.addCustomer.bind(this)
      this.handleClickOpen = this.handleClickOpen.bind(this)
      this.handleClose = this.handleClose.bind(this);   */    
    }
    //
    handleFormSummit = (e) => {
        e.preventDefault()
        //console.log("handleFormSummit");
        this.addCustomer()
            .then((response) => {
                console.log(response.data);  
                this.props.stateRefresh();
            })
            .catch(err => console.log(err));
        this.setState ({
            file: null,
            userName: '',
            birthday: '',
            gender: '',
            job: '',
            fileName: ''
        })
        //window.location.reload();
      
    }

    handleFileChange = (e) => {
        this.setState({
          file: e.target.files[0],
          fileName: e.target.value
        });
    }

    handleValueChange = (e) => {
        let nextState = {};
        nextState[e.target.name] = e.target.value;
        this.setState(nextState);
    }

/*     
    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file);
        formData.append('name', this.state.userName);
        formData.append('birthday', this.state.birthday);
        formData.append('gender', this.state.gender);
        formData.append('job', this.state.job);
        formData.append('fileName', this.state.fileName);
        const config = {
            headers: {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
                'content-type': 'multipart/form-data'
            }
        }
        return post(url, formData, config)
    }
 */

    addCustomer = () => {
        const url = '/api/customers';
        const formData = new FormData();
        formData.append('image', this.state.file)
        formData.append('name', this.state.userName)
        formData.append('birthday', this.state.birthday)
        formData.append('gender', this.state.gender)
        formData.append('job', this.state.job)
        const config = {
        headers: {
            'content-type': 'multipart/form-data',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'Origin, X-Requested-With, Content-Type, Accept'
            }
        }
        console.log("submit");
        return post(url, formData, config)
        //return post('/api/customers', {image:this.state.file, name:this.state.userName, birthday:this.state.birthday, gender:this.state.gender, job:this.state.job})
    } 

    render() {
        return (
            <form onSubmit={this.handleFormSummit}>
                <h1>고객추가</h1>
                프로필 이미지: <input type="file" name="file" file={this.state.file} value={this.state.fileName} onChange={this.handleFileChange}/><br/>
                이름 : <input type="text" name="userName" value={this.state.userName} onChange={this.handleValueChange} /><br/>
                생년월일 : <input type="text" name="birthday" value={this.state.birthday} onChange={this.handleValueChange} /><br/>
                성별 : <input type="text" name="gender" value={this.state.gender} onChange={this.handleValueChange} /><br/>
                직업 : <input type="text" name="job" value={this.state.job} onChange={this.handleValueChange} /><br/>
                <button type="submit">추가하기</button>
            </form>
        )
    }
}

export default CustomerAdd;