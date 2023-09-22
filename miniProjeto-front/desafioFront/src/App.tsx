import './App.css'
import { MainRoutes } from "./routes/mainRoutes.routes";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
 

  return (
    <>
      <Router>
        <MainRoutes />
      </Router>
    </>
  )
}

export default App
