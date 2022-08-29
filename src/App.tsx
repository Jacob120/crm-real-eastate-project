import AppBar from './components/layout/Header/AppBar';
import Container from '@mui/material/Container';
import Community from './components/pages/Community/Community';
import Documents from './components/pages/Documents/Documents';
import Home from './components/pages/Home/Home';
import Inbox from './components/pages/Inbox/Inbox';
import Login from './components/pages/Login/Login';
import Resolutions from './components/pages/Resolutions/Resolutions';
import NotFound from './components/pages/NotFound/NotFound';
import Utilities from './components/pages/Utilities/Utilities';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <main>
      <Container>
        <AppBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/community' element={<Community />} />
          <Route path='/documents' element={<Documents />} />
          <Route path='/inbox' element={<Inbox />} />
          <Route path='/login' element={<Login />} />
          <Route path='/resolutions' element={<Resolutions />} />
          <Route path='/utilities' element={<Utilities />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
