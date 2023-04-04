import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import SignIn from './components/sign-in/sign-in.component';

const Shop = () => {
  return (
    <div>
      Hello this is the shop component
    </div>
  );
};

function App() {
  return (
    <Routes>
      <Route path='/' element={<Navigation />}>
        <Route index element={<SignIn />} />
        <Route path='shop' element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
