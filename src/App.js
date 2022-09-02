
import './App.css';
import Header from './components/HeaderComp/header';
import ValueDriven from './components/EnsuringFuture/ensuringFuture';
import AboutUs from './components/aboutUsComp/aboutUs';
import Services from './components/servicesComp/services';
import Achivement from './components/achivementComp/achivement';
import ClientAndPartners from './components/clientAndPartners/clientAndPartners';
import ContactUs from './components/contactUsComp/contactUs';
import Footer from './components/footer/footer';
import Ticker from './components/tickerComp/ticker';
import Blog from './components/blog/blog';
function App() {
  return (
    <div className='App'>
     <Header />
     <ValueDriven />
     <AboutUs/>
     <Services />
     <Achivement />
     <Ticker />
     {/* <ClientAndPartners /> */}
     <Blog />
     <ContactUs />
     <Footer />
    </div>
  );
}

export default App;
