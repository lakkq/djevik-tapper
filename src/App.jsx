import "./css/style.css";
import "./css/reset.css";
import { ContextProvider } from "./context/context.jsx";
import HeaderApp from "./layout/HeaderApp.jsx";
import BodyApp from "./layout/BodyApp.jsx";

function App() {
  return (
    <ContextProvider>
      <HeaderApp />
      <BodyApp />
    </ContextProvider>
  );
}

export default App;
