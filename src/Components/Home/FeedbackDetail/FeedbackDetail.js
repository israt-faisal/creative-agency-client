import React from 'react';

const FeedbackDetail = ({feedback}) => {
    return (
        
          <div className="card col-md-3 p-4" style={{marginRight:'40px'}}>
                <div class="d-flex">
        <div class="flex-shrink-0">
          <img style={{height:'50px'}} src={feedback.img} alt="..."/>
        </div>
        <div class="flex-grow-1 ms-3">
        <h5><strong>{feedback.name}</strong></h5>
        <h6>{feedback.designation}</h6>
        </div>
      </div>
      <p>Lorem ipsum dolor sit amet consec, adipisicing Delectus niam dolorum cumque placeat dicta explicabo quisquam. </p>
          </div>
      
       
     
    );
};

export default FeedbackDetail;