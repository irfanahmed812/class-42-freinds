import './App.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Users from './Components/Users/Users';
import UserDetails from './Components/Users/UserDetails/UserDetails';
import NotFound from './Components/NotFound/NotFound';
import Home from './Components/Home/Home';
import About from './Components/About/About';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main></Main>,
      children: [
        {
          path: '/',
          element: <Home></Home>
        },
        {
          path: '/friends',
          element: <Users></Users>,
          loader: async () => {
            return fetch('https://jsonplaceholder.typicode.com/users')
          }
        },
        {
          path: '/friend/:friendId',
          element: <UserDetails></UserDetails>,
          loader: async ({ params }) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${params.friendId}`)
          }
        },
        {
          path: '/about',
          element: <About></About>
        },
      ]
    },
    {
      path: '*',
      element: <NotFound></NotFound>
    }
  ])

  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
