import React, { useContext, useEffect } from 'react';
import { AppContext, Page } from './context/AppContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Stays from './pages/Stays';
import Hotels from './pages/Hotels';
import StayDetail from './pages/StayDetail';
import Booking from './pages/Booking';
import Auth from './pages/Auth';
import About from './pages/About';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';
import Wellness from './pages/Wellness';
import Circuits from './pages/Circuits';
import Flights from './pages/Flights';
import FlightResults from './pages/FlightResults';
import FlightBooking from './pages/FlightBooking';
import Omra from './pages/Omra';
import GroupRequestModal from './components/GroupRequestModal';

const App: React.FC = () => {
  const { currentPage, language } = useContext(AppContext);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentPage]);
  
  useEffect(() => {
    document.documentElement.lang = language.toLowerCase();
    document.documentElement.dir = language === 'AR' ? 'rtl' : 'ltr';
  }, [language]);

  const renderPage = () => {
    switch (currentPage.page) {
      case Page.Home:
        return <Home />;
      case Page.Stays:
        return <Stays />;
      case Page.Hotels:
        return <Hotels />;
      case Page.Wellness:
        return <Wellness />;
      case Page.Circuits:
        return <Circuits />;
      case Page.Flights:
        return <Flights />;
      case Page.FlightResults:
        return <FlightResults />;
      case Page.FlightBooking:
        return <FlightBooking />;
      case Page.Omra:
        return <Omra />;
      case Page.StayDetail:
        return <StayDetail />;
      case Page.Booking:
        return <Booking />;
      case Page.Auth:
        return <Auth />;
      case Page.About:
        return <About />;
      case Page.Contact:
        return <Contact />;
      case Page.Blog:
        return <Blog />;
      case Page.BlogPost:
        return <BlogPost />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="bg-brand-beige text-gray-800">
      <Header />
      <main key={currentPage.page + JSON.stringify(currentPage.params)}>
        {renderPage()}
      </main>
      <Footer />
      <GroupRequestModal />
    </div>
  );
};

export default App;