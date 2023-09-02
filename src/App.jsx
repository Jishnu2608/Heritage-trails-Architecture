import Header from "./components/Header/Header";
import Hero from './components/Hero/Hero';import './App.css';
import ContentArchitecture from "./components/Content/content-architecture";
import Footer from './components/Footer/Footer';


function App() {
  return (
    <div className="App">
      <div>
        <div className="white-gradient"/>
        <Header/>
        <Hero/>
      </div>
      <ContentArchitecture/>
      <Footer/>
    </div>
  );
}

export default App;
