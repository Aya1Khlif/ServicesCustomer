const Clients = ({ clients }) => (
    <section className="clients">
      <h2>عملاؤنا</h2>
      <ul>
        {clients.map((client, index) => (
          <li key={index}>{client}</li>
        ))}
      </ul>
    </section>
  );
  
  export default Clients;
  