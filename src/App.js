import './App.css';
import { Route, createBrowserRouter,RouterProvider, createRoutesFromElements } from 'react-router-dom';
import Main from './Main';
import Home from './route/Home';
import About from './route/About';
import Service from './route/Service';
import Pricing from './route/Pricing';
import Contact from './route/Contact';

const  router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Main />}>
      <Route index element={<Home />}/>
      <Route path='about' element={<About />}/>
      <Route path='service' element={<Service />}/>
      <Route path='pricing' element={<Pricing />}/>
      <Route path='contact' element={<Contact />}/>
    </Route>
  )
)
function App() {
  return <RouterProvider router={router}/>
}

export default App;
