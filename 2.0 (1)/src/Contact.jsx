import React, { useState } from 'react';
import './style.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    service: '',
    date: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Itt történhetne pl. az adatok elküldése valahová (pl. email API-hoz)

    // Mezők kiürítése
    setFormData({
      name: '',
      email: '',
      service: '',
      date: '',
      message: ''
    });

    // Visszajelzés
    setSubmitted(true);

    // Eltüntetés pár mp múlva
    setTimeout(() => setSubmitted(false), 4000);
  };

  return (
    <section id="contact">
      <h2>Elérhetőség</h2>
      <p>Telefonszám: +36 20 123 4567<br />E-mail: golyophotos@gmail.com</p>
      <p>Ha szeretnél időpontot kérni, töltsd ki az alábbi adatokat!</p>

      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Név:</label>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Add meg a neved"
          value={formData.name}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="email">E-mail cím:</label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Add meg az e-mail címed"
          value={formData.email}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="service">Választott szolgáltatás:</label>
        <select
          id="service"
          name="service"
          value={formData.service}
          onChange={handleChange}
          required
        >
          <option value="" disabled>------</option>
          <option value="eskuvoi">Esküvői fotózás</option>
          <option value="portre">Portréfotózás</option>
          <option value="tablo">Tablófotózás</option>
          <option value="rendezveny">Rendezvény fotózás</option>
          <option value="kismama">Kismama fotózás</option>
           <option value="kismama">Kisállat fotózás</option>
            <option value="kismama">Családi fotózás</option>
          <option value="auto">Autós fotózás</option>
        </select><br />

        <label htmlFor="date">Időpont választása:</label>
        <input
          type="date"
          id="date"
          name="date"
          value={formData.date}
          onChange={handleChange}
          required
        /><br />

        <label htmlFor="message">Üzenet:</label><br />
        <textarea
          id="message"
          name="message"
          placeholder="Írd meg az üzeneted..."
          value={formData.message}
          onChange={handleChange}
          required
        ></textarea><br />

        <button type="submit">Küldés</button>
      </form>

      {submitted && (
        <p style={{ color: "green", marginTop: "10px" }}>
          Köszönjük! Az üzenetedet sikeresen elküldtük.
        </p>
      )}
    </section>
  );
};

export default Contact;
