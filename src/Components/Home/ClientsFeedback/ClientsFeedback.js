import React from 'react';
import customer1 from '../../../Images/customer-1.png';
import customer2 from '../../../Images/customer-2.png';
import customer3 from '../../../Images/customer-3.png';
import FeedbackDetail from '../FeedbackDetail/FeedbackDetail';

const feedbackInfo = [
    {
        name:'Nash Patrik',
        designation:'CEO, MANPOL',
        img: customer1

    },
    {
        name:'Mirriam Baron',
        designation:'CEO, MANPOL',
        img: customer2

    },
    {
        name:'Bria Malone',
        designation:'CEO, MANPOL',
        img: customer3

    }
]

const ClientsFeedback = () => {
    return (
      <section>
          <h2 className="text-center mt-5">Clients <span style={{color:'green'}}>Feedback</span></h2>

          <div className="d-flex justify-content-evenly">
              <div className="offset-md-2 row pt-5">
              
              {
                  feedbackInfo.map(feedback=><FeedbackDetail feedback={feedback}></FeedbackDetail> )
              }
         
          </div>
          </div>
      </section>
    );
};

export default ClientsFeedback;