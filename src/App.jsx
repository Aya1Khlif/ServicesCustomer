import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Clients from "./components/Clients";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Chat from "./page/Chat/Chat";
import "./App.css";
import FAQ from "./components/FAQ";

function App() {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error loading data:", error));
  }, []);

  if (!data) return <div>Loading...</div>;

  return (
    <>
      <Navbar items={data.nav} />

      <section id="home">
        <Hero content={data.hero} />
      </section>

      <section id="about">
        <About content={data.about} />
      </section>

      <section id="clients">
        <Clients clients={data.clients} />
      </section>

      <section id="services">
        <Services services={data.services} />
      </section>

      <section id="contact">
        <Contact contact={data.contact} />
      </section>
      <FAQ faqs={data.faqs} />
      <Footer text={data.footer} />
      <Chat />
     
    </>
  );
}

export default App;
