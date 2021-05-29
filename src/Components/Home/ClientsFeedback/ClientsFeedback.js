import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';

// const feedbackInfo = [
//     {
//         name:'Nash Patrik',
//         designation:'CEO, MANPOL',
//         img: customer1

//     },
//     {
//         name:'Mirriam Baron',
//         designation:'CEO, MANPOL',
//         img: customer2

//     },
//     {
//         name:'Bria Malone',
//         designation:'CEO, MANPOL',
//         img: customer3

//     }
// ]

const ClientsFeedback = () => {
    const [feedback, setFeedback] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:5000/feedback')
        .then(res => res.json())
        .then(data => setFeedback(data))
    }, [])
    return (
      <section>
          <h2 className="text-center mt-5">Clients <span style={{color:'green'}}>Feedback</span></h2>

          <div className="d-flex justify-content-evenly">
              <div className="offset-md-2 row pt-5">
              
              {
                  feedback.map(feedback=><FeedbackDetail feedback={feedback}></FeedbackDetail> )
              }
         
          </div>
          </div>
      </section>
    );
};

export default ClientsFeedback;