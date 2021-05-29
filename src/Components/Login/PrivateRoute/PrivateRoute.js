import React, { useContext } from 'react';
import { UserContext } from '../../../App';
import { Route, Redirect } from 'react-router-dom';


const PrivateRoute = ({children,...rest}) => {
    const [loginUser, setLoginUser] = useContext(UserContext);
    

    return (
       
             <Route
      {...rest}
      render={({ location }) =>
        (loginUser.email? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
        )
          }
    />
          
        
    );
}

export default PrivateRoute;