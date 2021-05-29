import React from 'react';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useHistory } from 'react-router-dom';
import Sidebar from '../../Dashboard/Sidebar/Sidebar';

const AddService = () => {
    const {register, handleSubmit} = useForm();
    const [file, setFile] = useState(null);
    const history = useHistory();


    const handleFileChange = (e) => {
        const newFile = e.target.files[0];
        setFile(newFile);
    }

    const onSubmit = (data)=>{
       
        const formData = new FormData();
        const projectfileS = JSON.stringify(data.projectfileS)
        formData.append('file', file);
        formData.append('projectfileS', projectfileS);
        formData.append('title', data.title);
        formData.append('description', data.description);
        
        fetch('http://localhost:5000/addServices', {
            method: 'POST',
            body: formData

        })
        .then(res => res.json())
        .then(result => {
            if(result){
                alert('successfully added a new service')
                history.replace('/')
            }
          console.log(data)
        });

    
}



    return (
        <div className="row d-flex ms-3 me-5 justify-content">
            <div className="col-md-3" >
                <Sidebar></Sidebar>
            </div>
            <div className="col-md-9">
                <h3>Add Services</h3>
                <div className="mt-5 ms-3 w-100" style={{ backgroundColor: 'aliceblue', height: '90vh' }}>
                    <br />
                    <form className="ms-2 w-75" style={{backgroundColor:"white", padding:"30px", borderRadius:"20px"}} onSubmit={handleSubmit(onSubmit)}>
                        <div class="mb-3">
                            <label for="exampleFormControlInput1" class="form-label">Service Title</label>
                            <input type="text" name="title" class="form-control w-50"  {...register("title", { required: true })} placeholder="Enter Title"/>
                           </div>
                            <div class="mb-3">
                                <label for="exampleFormControlTextarea1" class="form-label">Description</label>
                                <textarea name="description" class="form-control w-50"  {...register("description", { required: true })} rows="3" placeholder="Description"/>
                            </div>

                            <div className="col mb-3 form-group w-25">
                                <label>Icon</label>
                            <input onChange={handleFileChange} class="form-control btn-outline-success" name="image" type="file" placeholder="upload project file" />
            
                        </div>
                        <div className="form-group">
                        <button type="submit" class="btn btn-success" style={{ width: '150px' }}>Submit</button>
                    </div>
                   </form>

               </div>


                </div>

            </div>
            );
};

            export default AddService;