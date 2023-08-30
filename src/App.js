import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import "./style/app.scss";
import "./style/home.scss";
import "./style/footer.scss";
import "./style/Contect.scss";
import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Contect from "./components/Contect";
import Services from "./components/Services";
import "./style/mediaquery.scss";

function App()
{
  return(
    <Router>
      <Header />
      <Routes>

        <Route path="/" element={<Home />} />
        <Route path="/contect" element={<Contect />} />
        <Route path="/services" element={<Services />} />


      </Routes>
      <Footer />
      

    </Router>
  )
}

export default App;
