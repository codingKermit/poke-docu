import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home'
import Item from './routes/Items'
import Machine from './routes/Machine'
import Move from './routes/Move'
import { Container } from "react-bootstrap";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    },{
      path:'/Home',
      element:<Home/>
    },{
      path:'/Item',
      element:<div><h4>Hello i'm Item</h4></div>
    },{
      path:'/Berry',
      element:<div><h4>Hello i'm Berry</h4></div>
    },{
      path:'/Machine',
      element:<div><h4>Hello i'm Machine</h4></div>
    },{
      path:'/Pokemon',
      element:<div><h4>Hello i'm Pokemon</h4></div>
    },{
      path:'/Type',
      element:<div><h4>Hello i'm Type</h4></div>
    },{
      path:'/Move',
      element: <Move/>
    }
  ])


  return (
    <div>
      <Container>
        <Header/>
        <RouterProvider router={router}/>
      </Container>
    </div>
  );
}

export default App;
