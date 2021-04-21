import React from 'react';

const Footer = () => {
    return (
        <div className="mt-5 footer row">

            <div className="offset-1 mt-5 col-md-5">
                <h2>Let us handle your <br />project, professionally.</h2>
                <br />
                <p className="secondary">With well written codes, we build amazing apps for all <br /> platforms, mobile and web apps in general. </p>
            </div>

            <div className="mt-5 col-md-5">
                <form>
                    <div class="mb-3">
                        
                        <input type="email" class="form-control form-control-lg" id="exampleInputEmail1" name="email" placeholder="Your email address" aria-describedby="emailHelp" required />
                    </div>
                    <div class="mb-3">
                        <input type="name" class="form-control form-control-lg" id="exampleInputPassword1" name="name" placeholder="Your name / company's name" required/>
                    </div>
                    <div class="mb-3">
                    <textarea style={{height:'250px'}} type="description" class="form-control form-control-lg" id="exampleInputPassword1" name="description" placeholder="Your message" required> </textarea>
                    </div>
                    <button type="submit" class="btn btn-dark" style={{width:'150px'}}>Send</button>
                </form>
            </div>
        </div>
    );
};

export default Footer;