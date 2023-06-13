import { Container } from "react-bootstrap";
import { Routes, Route } from "react-router-dom";

// Layout
import Layout from "./layout/Layout";

// pages
import Home from "./pages/Home";
import About from "./pages/About";
import Themes from "./pages/Theme"
import Regform from "./pages/regform";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Layout>
      <Container>
        <Routes>
          <Route path="/" element={<Home />} exact />
          <Route path="/about" element={<About />} />
          <Route path="/themes" element={<Themes />} />
          <Route path="/form1" element={<Regform />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </Layout>
  );
};

export default App;
