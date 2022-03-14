import React, { Component } from 'react';

const inputStyles ={
    border:'none',
    borderBottom:'3 px solid gray',
    padding:'5px',
    height:'24px',
    width:'200px',
    background:'aqua',
    margin:'10px'
}


export default class Login extends Component {
    constructor(){
        super();
        this.state={
            username:"abc@ex.com",
            password:""
        }
    }
   onLoginHandler =() =>{
     const {username,password}=this.state;

     alert("username" + username +"password" + password)
   }

   onChangeHandler =(e,field)=>{
        this.setState({
            [field]:e.target.value
        })
   }

   onResetHandler =() =>{
       this.setState({
           username:"",
           password:""
       })
   }

  render() {
     const {username,password} =this.state;
    return (
      <div style={{margin:'10px',padding:'30px 20 px',border:'1px solid black'}}>
        <h2>Login Form </h2>
        <br/>
        <br/>
        <label className='input-label'>Email:</label>
        <input type="email" className="input-field" style={inputStyles} value={username} onChange= {(e)=>this.onChangeHandler(e,'username')} required />
        <br/>
        <br/>
        <label className='input-label'>Password:</label>
        <input type="password" className="input-field"  style={inputStyles} value={password}  onChange= {(e)=>this.onChangeHandler(e,'password')} />
        <br/>
        <br/>
        <br/>
        <button onClick={this.onLoginHandler}>Login</button>
        <button onClick={this.onResetHandler}>Cancel</button>
      </div>
    );
  }
}
