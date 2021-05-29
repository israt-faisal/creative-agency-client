import React, { useState } from 'react';
import { useContext } from 'react';

import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import { UserContext } from '../../../App';

import Sidebar from '../Sidebar/Sidebar';

const Review = () => {
    const {register, handleSubmit} = useForm();
    const history = useHistory();

    const [loginUser, setLoginUser] = useContext(UserContext);
    const [review, setReview] = useState([]);

    

    const handleBlur = (e) => {
        const newReview = { ...review };
        newReview[e.target.name] = e.target.value;
        setReview(newReview);
    }
    
const onSubmit =(reviewData) =>{
    const img = {...loginUser, ...reviewData};
    
    const reFormData = new FormData()
    reFormData.append('name', loginUser.name);
    reFormData.append('image', loginUser.img);
    reFormData.append('company', reviewData.company);
    reFormData.append('description', reviewData.description);
   


        fetch('http://localhost:5000/addReview', {
            method : 'POST',
            headers:{'Content-type': 'application/json'},
            body: JSON.stringify(img)
        })
        .then(res => res.json(img))
            .then(result => {
                if(result){
                    alert('Thanks for the review')
                    history.replace('/')
                    
                }
              console.log(reviewData)
             
            });
    

}



    return (
        <div className= "d-flex row ms-3 me-5 justify-content">
           <div className="col-md-3">
                <Sidebar></Sidebar>
           </div>
        <div className="col-md-9">
            <h3 className="ms-5 mt-5" style={{marginBottom:'-20px'}}>Client Review</h3>
             <div className="mt-5 ms-3 w-100" style={{backgroundColor:'aliceblue', height:'90vh'}}>
                <br/>
                <form className="ms-5" onSubmit={handleSubmit(onSubmit)}>

                    <div class="mt-3 mb-3"> 
                    <input type="text" onBlur={handleBlur} defaultValue={loginUser.name} placeholder="Your Name" className="form-control w-50" required/>
                    </div>

                    <div class="mb-3 form-group">
                        <input type="text" onBlur={handleBlur} class="form-control w-50"  {...register("company", { required: true })} placeholder="Company's name, designation" required />
                    </div>

                    <div class="mb-3 form-group">
                    <textarea style={{height:'100px'}} type="text" onBlur={handleBlur} class="form-control w-50 form-control-lg" placeholder="Comment here" {...register("description", { required: true })} required /> 
                    </div>

                    <button type="submit" class="btn btn-dark" style={{width:'150px'}}>Send</button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default Review;