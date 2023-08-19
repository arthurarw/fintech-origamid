import Header from "./components/Header";
import Sidenav from "./components/Sidenav";
import { DataContextProvider } from "./contexts/DataContext";
import Resume from "./pages/Resume";
import "./style.css";

function App() {
  return (
    <DataContextProvider>
      <div className="container">
        <Sidenav />
        <main>
          <Header />
          <Resume />
        </main>
      </div>
    </DataContextProvider>
  );
}

export default App;
