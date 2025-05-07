function Services() {
  return (
    <section id="services">
      <h2>Szolgáltatások</h2>
      <table>
        <thead>
          <tr>
            <th>Szolgáltatás</th>
            <th>Időtartam</th>
            <th>Alap ár</th>
          </tr>
        </thead>
        <tbody>
          <tr><td>Esküvői fotózás</td><td>5-15 óra</td><td>300 000 Ft</td></tr>
          <tr><td>Portré fotózás</td><td>1-3 óra</td><td>80 000 Ft</td></tr>
          <tr><td>Tabló fotózás</td><td>2-4 óra</td><td>150 000 Ft</td></tr>
          <tr><td>Rendezvény fotózás</td><td>3-8 óra</td><td>200 000 Ft</td></tr>
          <tr><td>Kismama fotózás</td><td>1-3 óra</td><td>85 000 Ft</td></tr>
          <tr><td>Kisállat fotózás</td><td>1-3 óra</td><td>90 000 Ft</td></tr>
          <tr><td>Családi fotózás</td><td>1-3 óra</td><td>100 000 Ft</td></tr>
          <tr><td>Autós fotózás</td><td>1-3 óra</td><td>100 000 Ft</td></tr>
        </tbody>
      </table>
      <p className="warning">Az árak bizonyos körülmények esetén változhatnak!</p>
    </section>
  );
}
export default Services;
