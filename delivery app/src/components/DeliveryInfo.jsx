function Delivery() {
  return (
    <section id="delivery" className="delivery">
      <h2>Servicio de Delivery</h2>

      <p>
        Llevamos los mejores platos de nuestro restaurante directamente a tu hogar,
        con rapidez y total cuidado en la entrega.
      </p>

      <div className="delivery-info">
        <div className="box">
          <h3>Tiempo estimado</h3>
          <p>30 - 50 minutos</p>
        </div>

        <div className="box">
          <h3>Cobertura</h3>
          <p>Todo el distrito y zonas cercanas</p>
        </div>

        <div className="box">
          <h3>Pagos</h3>
          <p>Efectivo / Yape / Plin</p>
        </div>
      </div>

      <button className="btn">Pedir Delivery</button>
    </section>
  )
}

export default Delivery