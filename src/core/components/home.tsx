
import { Outlet } from 'react-router-dom';
import '../css/home.css'
const Home = () => {
  return (
    <div className="home">      
      <Outlet />     
    </div>
  );
};

export default Home;