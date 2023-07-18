import HomePage from './HomePage'
import './App.css'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import MainNoticePage from './noticePage';
import {IluNotice} from './notice';
import EmailEnvite from './Email/emailEnvite';
import ConfirmedEmail from './components/confirmedEmail';

const router = createBrowserRouter([{
  path: '/',
  element: <HomePage />
},
{
  path: '/noticias',
  element: <MainNoticePage />
},
{
  path: '/noticia',
  element: <IluNotice />
},
{
  path: '/emailEnvite',
  element: <EmailEnvite />
},
{
  path: '/emailConfirmed',
  element: <ConfirmedEmail />
}]);
function App() {

  return (
      <RouterProvider router={router}/>  
  )
}

export default App
