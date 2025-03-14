  const Contact = ({ contact }) => (
      <section className="contact">
        <h2>Contact Us</h2>
        <p>Email: {contact.email}</p>
        <p>Phone: {contact.phone}</p>
      </section>
    );
    
    export default Contact;
    