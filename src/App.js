import './styles/App.css';
import {BrowserRouter} from "react-router-dom";
import AppRoutes from "./components/UI/AppRoutes";
import Navbar from "./components/UI/navbar/Navbar";
import Footer from "./components/UI/footer/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar/>
        <AppRoutes/>
        <Footer/>
      </BrowserRouter>
    </>
  );
}

export default App;
