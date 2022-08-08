import { useLocation } from "react-router-dom";
import "./App.css";
import { Footer, Header } from "./components";
import RouterPage from "./router/RouterPage";

function App() {
  const location = useLocation();
  return (
    <div className="App">
      <Header />
      <RouterPage />
      <Footer />
    </div>
  );
}

export default App;
