import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home'
import Item from './routes/Items'
import Machines from './routes/Machines'
import Move from './routes/Move'

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<div><h4>Hello i'm Home</h4></div>
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
      <Header/>
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
