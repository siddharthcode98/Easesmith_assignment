import { Route, Routes } from "react-router";
import HomePage from "./components/HomePage";
import ThankYouPage from "./components/ThankYouPage";
import Header from "./components/Header";
import ContextProvider from "./contextProvides";
import Footer from "./components/Footer";

function App() {
  return (
    <ContextProvider>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/thankyou" element={<ThankYouPage />} />
      </Routes>
      <Footer />
    </ContextProvider>
  );
}

export default App;
