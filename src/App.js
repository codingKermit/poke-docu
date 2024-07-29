import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Header from "./layout/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './routes/Home'
import Item from './routes/Items'
import Machine from './routes/Machine'
import Move from './routes/Move'
import { Container } from "react-bootstrap";
import {PokeDetail , loader as pokeDetailLoader } from "./routes/PokeDetail";
import Layout from "./layout/Layout";

function App() {

  const router = createBrowserRouter([
    {
      path:'/',
      element:<Layout/>,
      children : [
        {
          path:'/',
          element:<Home/>
        },
        {
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
        },{
          path : '/Pokemon/:id',
          element : ( <PokeDetail/> ),
          loader : pokeDetailLoader
        }
      ]
    },
    // {
    //   path:'/Home',
    //   element:<Home/>
    // },{
    //   path:'/Item',
    //   element:<div><h4>Hello i'm Item</h4></div>
    // },{
    //   path:'/Berry',
    //   element:<div><h4>Hello i'm Berry</h4></div>
    // },{
    //   path:'/Machine',
    //   element:<div><h4>Hello i'm Machine</h4></div>
    // },{
    //   path:'/Pokemon',
    //   element:<div><h4>Hello i'm Pokemon</h4></div>
    // },{
    //   path:'/Type',
    //   element:<div><h4>Hello i'm Type</h4></div>
    // },{
    //   path:'/Move',
    //   element: <Move/>
    // },{
    //   path : '/Pokemon/:id',
    //   element : ( <PokeDetail/> ),
    //   loader : pokeDetailLoader
    // }
  ],{
    basename : "/poke-docu"
  })


  return (
    <div>
      <Container>
          {/* <Header/> */}
        <RouterProvider router={router}/>
      </Container>
    </div>
  );
}

export default App;
