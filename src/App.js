
import './App.css';
import Header from './components/HeaderComp/header';
import ValueDriven from './components/valueDrivenComp/valuedriven';
import AboutUs from './components/aboutUsComp/aboutUs';
import Services from './components/servicesComp/services';
function App() {
  return (
    <div className='App'>
     <Header />
     <ValueDriven />
     <AboutUs/>
     <Services />
    </div>
  );
}

export default App;
