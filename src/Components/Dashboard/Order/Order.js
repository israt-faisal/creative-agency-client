import React from 'react';
import { useState} from 'react';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';
import Sidebar from '../Sidebar/Sidebar';

const Order = () => {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const [loginUser, setLoginUser] = useContext(UserContext);
    
    const [orderInfo, setOrderInfo] = useContext(UserContext);
    console.log(orderInfo);

    const [file, setFile] = useState(null);

    const handleBlur = (e) => {
        const newOrderInfo = { ...orderInfo };
        newOrderInfo[e.target.name] = e.target.value;
        setOrderInfo(newOrderInfo);
    }

   
    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }
  

    const onSubmit = (data) => {   
            const formData = new FormData()
            formData.append('file', file);
            formData.append('name', loginUser.name);
            formData.append('email', loginUser.email);
            formData.append('service', data.service);
            formData.append('price', data.price);
            formData.append('details', data.details);
          
            fetch('http://localhost:5000/addanOrder', {
              method: 'POST',
              body: formData
            })
            .then(res => res.json())
            .then(result => {
                if(result){
                    alert('Order placed Successfully')
                    history.replace('/serviceList')
                }
              console.log(data)
            });
        

    }

    return (
        <div className="row"  >
            <div className="col-md-3"> 
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
            <h3 className=" ms-3 mt-5">Order</h3>
            <div style={{ background: 'aliceBlue', height: '90vh' }}>
                <br />
                <form className="ms-5 mt-5 w-50" onSubmit={handleSubmit(onSubmit)} >
                    <div className="mb-3 form-group">
                        <input type="text" onBlur={handleBlur} defaultValue={loginUser.name} placeholder="Your Name / Company's Name" className="form-control" required/>
                        
                    </div>

                    <div class="mb-3 form-group">

                        <input type="email" onBlur={handleBlur} defaultValue={loginUser.email}  placeholder="Your Email" className="form-control" required />
                       
                    </div>

                    <div class="mb-3 form-group">
                        <input type="text" onBlur={handleBlur} 
                         {...register("service", { required: true })}
                         placeholder="Service" className="form-control" required />
                      
                    </div>

                    <div class="mb-3 form-group">
                        <textarea style={{ height: '80px' }} type="text"  {...register("details", { required: true })}  onBlur={handleBlur} placeholder="project Detail" className="form-control" required/>
                       
                    </div>

                    <div className="row g-3 form-group">
                        <div class="col mb-3">
                            <input name="price" type="text" onBlur={handleBlur} {...register("price", { required: true })}  placeholder="Price" className="form-control" required />
                            
                        </div>

                        <div className="col mb-3 form-group">
                            <input onChange={handleFileChange} class="form-control btn-outline-success" name="image" type="file" placeholder="upload project file" />
            
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" class="btn btn-dark" style={{ width: '150px' }}>Send</button>
                    </div>
                </form>
            </div>
           </div>
        </div>
    );
};

export default Order;