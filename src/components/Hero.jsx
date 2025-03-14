import { Link } from "react-scroll";

const Hero = ({ content }) => (
    <section id="hero" className="hero">
      <h1>{content.title}</h1>
      <p>{content.subtitle}</p>
      <Link
      to="contact" 
      smooth={true} 
      duration={500} 
    >
      <button>{content.buttonText}</button>
    </Link>
    </section>
  );
  
  export default Hero;
  