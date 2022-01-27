import logo from './logo.svg';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './Components/Header/Header';
import Footer from './Components/Footer/Footer';
import Home from './Components/Home/Home';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './Components/Login/Login';
import Register from './Components/Register/Register';
import AuthProvider from './context/AuthProvider';
import Shipping from './Components/Shipping/Shipping';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import OrderHistory from './Components/PrivateRoute/OrderHistory/OrderHistory';
// import initializeAuthentication from './Components/Firebase/firebase.initialize';
// initializeAuthentication();

function App() {
  return (
    <div className="App">

      <AuthProvider>
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" > <Home></Home></Route>
            <Route path="/home" > <Home></Home></Route>
            <Route path="/home" ></Route>

            <PrivateRoute path="/shipping" > <Shipping></Shipping> </PrivateRoute>
            <PrivateRoute path="/orderHistory" > <OrderHistory></OrderHistory> </PrivateRoute>

            <Route path="/register"> <Register></Register></Route>
            <Route path="/login" > <Login></Login></Route>
          </Switch>
          <Footer ></Footer>
        </BrowserRouter>
      </AuthProvider>

    </div>
  );
}

export default App;
