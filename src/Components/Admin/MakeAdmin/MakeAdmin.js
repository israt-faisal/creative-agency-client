import React, { useContext } from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const MakeAdmin = () => {
    const {register, handleSubmit} = useForm();
    const [loginUser, setLoginUser] = useContext(UserContext);
    const [admin, setAdmin] = useState([]);
   
 const history = useHistory();


    const onSubmit=(data)=>{

        fetch('http://localhost:5000/makeAdmin', {
            method : 'POST',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify({email:loginUser.email})
        })
        .then(res => res.json())
            .then(data => setAdmin(data));

                if(data){
                    alert('Made an admin perfectly!')
                    history.replace('/sidebar')
                    
                }
              console.log(data)
            
            
}

    return (
        <div className="row">
            <div className="col-md-3">
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h3>Make Admin</h3>
                <div className="mt-5 ms-3 w-100" style={{ backgroundColor: 'aliceblue', height: '90vh' }}>
                    <br/>
              <form className="ms-5" onSubmit={handleSubmit(onSubmit)}>
                  <div className="w-75 form-control">
                      <label className="form-label">Email</label>
                      <input type="email" {...register("email", { required: true })} placeholder="write email here" className="form-control"/>
                  </div>
                  <br/>
                  <button type="submit" class="btn btn-success" style={{width:'150px'}}>Submit</button>
              </form>
              </div>

            </div>
            
        </div>
    );
};

export default MakeAdmin;