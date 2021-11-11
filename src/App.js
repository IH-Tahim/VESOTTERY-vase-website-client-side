import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AuthProvider from './Contexts/AuthProvider';
import Footer from './Pages/Shared/Footer/Footer';
import Home from './Pages/Home/Home';
import Navigation from './Pages/Shared/Navigation/Navigation';


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
            {/* <Route exact path="/">
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home></Home>
            </Route>

            <PrivateRoute path="/placeorder/:orderId">
              <PlaceOrder></PlaceOrder>
            </PrivateRoute>

            <PrivateRoute path="/myOrders">
              <MyOrders></MyOrders>
            </PrivateRoute>

            <PrivateRoute path="/addtour">
              <AddTour></AddTour>
            </PrivateRoute>

            <PrivateRoute path="/manageOrders">
              <ManageOrders></ManageOrders>
            </PrivateRoute>

            <Route path="/Blogs">
              <Blogs></Blogs>
            </Route>

            <Route path="/login">
              <Login></Login>
            </Route>

            <Route path="*">
              <NotFound></NotFound>
            </Route> */}

          </Switch>
          <Footer></Footer>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
