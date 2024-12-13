import { NavProvider } from "./context/NavContext";
import MainRoute from "./routes/MainRoute";

function App() {
  return (
    <NavProvider>
      <MainRoute />
    </NavProvider>
  );
}

export default App;
