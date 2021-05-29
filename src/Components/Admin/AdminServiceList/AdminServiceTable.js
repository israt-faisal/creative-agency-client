import React, { useContext } from 'react';
import { UserContext } from '../../../App';


const AdminServiceTable = ({allOrder}) => {
    const [loginUser, setLoginUser] = useContext(UserContext);

    return (
        <div>
             <table className="table table-borderless">
            <thead>
                <tr>
                
                <th className="text-secondary" scope="col">Name</th>
                <th className="text-secondary" scope="col">Email ID</th>
                <th className="text-secondary" scope="col">Service</th>
                <th className="text-secondary" scope="col">Details</th>
                <th className="text-secondary" scope="col">Status</th>
                
                </tr>
            </thead>
            <tbody>
                   { allOrder.map(order=>
                    <tr>
                        <td>{loginUser.name}</td>
                        <td>{loginUser.email}</td>
                        <td>{order.service}</td>
                        <td>{order.details}</td>
                        <td>{order.status}</td>
                        
                        
                    </tr>
                    )}

                    
            </tbody>
            </table>
        </div>
    );
};

export default AdminServiceTable;