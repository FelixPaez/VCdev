import Home from "./home";
import Header from "./header";
import "../css/container.css";
const Container = () => {
  return (
    <div className="container">
      <Header></Header>
      <div className="home-container">
        <Home></Home>
      </div>
    </div>
  );
};

export default Container;
