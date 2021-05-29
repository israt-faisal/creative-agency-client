import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Components/Home/Home/Home';
import Login from './Components/Login/Login';
import { createContext } from 'react';
import { useState } from 'react';
import Dashboard from './Components/Dashboard/Dashboard/Dashboard';
import Review from './Components/Dashboard/Review/Review';
import PrivateRoute from './Components/Login/PrivateRoute/PrivateRoute';
import ServiceList from './Components/Dashboard/ServiceList/ServiceList';
import AddService from './Components/Admin/AddService/AddService';
import MakeAdmin from './Components/Admin/MakeAdmin/MakeAdmin';
import Order from './Components/Dashboard/Order/Order';
import AdminServiceList from './Components/Admin/AdminServiceList/AdminServiceList';
import Sidebar from './Components/Dashboard/Sidebar/Sidebar';


export const UserContext = createContext();

function App() {
  const [loginUser, setLoginUser] = useState({});
  const [orderInfo, setOrderInfo] = useState({});
  
 

  
  return (
<UserContext.Provider value={[loginUser, setLoginUser, orderInfo, setOrderInfo]}>

    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
       
        <PrivateRoute path="/order">
         <Order></Order>
        </PrivateRoute>
        <PrivateRoute path="/sidebar">
          <Sidebar></Sidebar>
        </PrivateRoute>
        <Route path="/review">
          <Review></Review>
        </Route>
        <Route path="/serviceList">
          <ServiceList></ServiceList>
        </Route>

        <Route path="/adminServiceList">
          <AdminServiceList></AdminServiceList>
        </Route>

        <Route path="/addService">
          <AddService></AddService>
        </Route>
        <Route path="/makeAdmin">
          <MakeAdmin></MakeAdmin>
        </Route>
        <Route path="/login">
          <Login></Login>
        </Route>
      </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
