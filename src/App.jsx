
import { About, Footer, Header, Skills, Projects } from "./container";
import { Navbar } from "./components";
import "./App.scss";

const App = () => {

  return (
    <div className="app">
    <Navbar />
    <Header />
      <About />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
