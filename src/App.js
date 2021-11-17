import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './Contexts/AuthProvider';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import PlaceOrder from './Pages/PlaceOrder/PlaceOrder';
import AllProducts from './Pages/AllProducts/AllProducts';
import NotFound from './Pages/NotFound/NotFound';
import Blogs from './Pages/Blogs/Blogs';
import Dashboard from './Pages/Dashboard/Dashboard';
import About from './Pages/About/About';


function App() {

  return (
    <div className="App">
      <AuthProvider>

        <Router>

          <Navigation />
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>

            <Route path="/about">
              <About></About>
            </Route>

            <PrivateRoute path="/placeorder/:orderId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>
            <Route path="/products">
              <AllProducts></AllProducts>
            </Route>
            <Route path="/blogs">
              <Blogs></Blogs>
            </Route>
            <PrivateRoute path="/dashboard">
              <Dashboard></Dashboard>
            </PrivateRoute>


            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route>

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
