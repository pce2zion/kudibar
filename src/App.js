import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Main from "./components/main/Main";
import Moments from "./components/moments/Moments";
import Nav from "./components/navigation/Nav";
import Trusted from "./components/trusted/Trusted";


function App() {
  return (
    <div className="App">
      <Nav/>
    <Main/>
    <Trusted/>
    <Moments/>
    <Experience/>
     <Footer/> 
    </div>
  );
}

export default App;
