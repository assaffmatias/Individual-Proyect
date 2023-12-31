import PATHROUTES from './helpers/PathRoutes';
import { Detail, Form, Home, Landing, About } from './views';
import {Routes, Route} from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';

function App() {

  return (
    <div className='App'>
      <NavBar />
      <Routes>
        <Route path={PATHROUTES.LANDING} element={<Landing/>}/>
        <Route path={PATHROUTES.HOME} element={<Home/>}/>
        <Route path={PATHROUTES.DETAIL} element={<Detail />}/>
        <Route path={PATHROUTES.FORM} element={<Form />}/>
        <Route path={PATHROUTES.ABOUT} element={<About />} />
      </Routes>
    </div>
  )
}

export default App;
