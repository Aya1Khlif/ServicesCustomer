const Services = ({ services }) => (
    <section className="services">
      <h2>خدماتنا</h2>
      <ul>
        {services.map((service, index) => (
          <li key={index}>
            <h3>{service.name}</h3>
            <p>{service.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
  
  export default Services;
  