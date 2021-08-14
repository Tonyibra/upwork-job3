import "./App.scss";
import Footer from "./Components/Footer/Footer";
import { Header } from "./Components/Header/Header";
import { WhyUs } from "./Components/Why/WhyUs";
import { Works } from "./Components/Workds/Works";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <main>
        <Works />
        <WhyUs />
        <Footer />
      </main>
    </div>
  );
}

export default App;
