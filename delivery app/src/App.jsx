import { useState, useEffect } from 'react'

function App() {
  const [scrolled, setScrolled] = useState(false)
  const [cartCount, setCartCount] = useState(0)
  const [activeCategory, setActiveCategory] = useState('Todos')

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const addToCart = () => setCartCount(prev => prev + 1)

  const categorias = [
    { id: 1, nombre: 'Todos', emoji: '🍽️' },
    { id: 2, nombre: 'Hamburguesas', emoji: '🍔' },
    { id: 3, nombre: 'Pizzas', emoji: '🍕' },
    { id: 4, nombre: 'Sushi', emoji: '🍣' },
    { id: 5, nombre: 'Ensaladas', emoji: '🥗' },
    { id: 6, nombre: 'Postres', emoji: '🍰' },
  ]

  const menuItems = [
    { id: 1, nombre: 'Smash Burger Doble', desc: 'Queso cheddar, cebolla caramelizada, salsa especial', precio: 10.99, tiempo: '20-30 min', rating: 4.9, pedidos: 124, emoji: '🍔', bg: '#FFEAEA', tag: 'Más vendido', categoria: 'Hamburguesas' },
    { id: 2, nombre: 'Pizza Margherita', desc: 'Mozzarella fresca, albahaca, salsa pomodoro', precio: 14.50, tiempo: '30-45 min', rating: 4.8, pedidos: 98, emoji: '🍕', bg: '#FFF3E0', tag: null, categoria: 'Pizzas' },
    { id: 3, nombre: 'Roll de Atún', desc: '12 piezas, salsa teriyaki, aguacate, sésamo', precio: 18.00, tiempo: '25-35 min', rating: 4.9, pedidos: 76, emoji: '🍣', bg: '#E8F5E9', tag: 'Premium', categoria: 'Sushi' },
    { id: 4, nombre: 'Ensalada César', desc: 'Pollo grillé, parmesano, crutones, aderezo César', precio: 8.75, tiempo: '10-15 min', rating: 4.6, pedidos: 55, emoji: '🥗', bg: '#F1F8E9', tag: null, categoria: 'Ensaladas' },
    { id: 5, nombre: 'Tiramisú Clásico', desc: 'Mascarpone, café espresso, cacao', precio: 6.50, tiempo: '5-10 min', rating: 4.9, pedidos: 112, emoji: '🍰', bg: '#FCE4EC', tag: 'Favorito', categoria: 'Postres' },
    { id: 6, nombre: 'Hamburguesa BBQ', desc: 'Salsa BBQ ahumada, bacon, aros de cebolla', precio: 12.50, tiempo: '20-30 min', rating: 4.7, pedidos: 89, emoji: '🍔', bg: '#FFF8E1', tag: null, categoria: 'Hamburguesas' },
    { id: 7, nombre: 'Pizza Pepperoni', desc: 'Doble pepperoni, mozzarella, orégano', precio: 15.00, tiempo: '30-45 min', rating: 4.8, pedidos: 150, emoji: '🍕', bg: '#FFEBEE', tag: 'Popular', categoria: 'Pizzas' },
    { id: 8, nombre: 'Cheesecake de Fresa', desc: 'Base galleta, crema de queso, fresas frescas', precio: 7.00, tiempo: '5-10 min', rating: 4.7, pedidos: 64, emoji: '🍓', bg: '#FCE4EC', tag: null, categoria: 'Postres' },
  ]

  const filteredMenu = activeCategory === 'Todos' 
    ? menuItems 
    : menuItems.filter(item => item.categoria === activeCategory)

  return (
    <>
      {/* NAVBAR */}
      <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <a className="nav-logo">Sabor<span>Express</span></a>
          <ul className="nav-links">
            <li><a className="nav-link" href="#inicio">Inicio</a></li>
            <li><a className="nav-link" href="#menu">Menú</a></li>
            <li><a className="nav-link" href="#ofertas">Ofertas</a></li>
            <li><a className="nav-link" href="#resenas">Reseñas</a></li>
          </ul>
          <div className="nav-actions">
            <button className="cart-btn">🛒 <span className="cart-count">{cartCount}</span></button>
            <button className="nav-order-btn">Pedir ahora</button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="hero" id="inicio">
        <div className="hero-container">
          <div className="hero-content">
            <div className="hero-badge">🔥 Envío gratis en pedidos +$25</div>
            <h1 className="hero-title">La mejor comida,<br /><span className="highlight">directo a tu puerta</span></h1>
            <p className="hero-desc">Descubre sabores únicos preparados por chefs expertos. Rápido, fresco y_delicioso en cada bocado.</p>
            <div className="hero-btns">
              <button className="btn-primary">🛵 Ordenar ahora</button>
              <button className="btn-outline">📋 Ver menú</button>
            </div>
            <div className="hero-stats">
              <div className="stat"><h3>30<span>min</span></h3><p>Tiempo de entrega</p></div>
              <div className="stat"><h3>4.9<span>⭐</span></h3><p>Calificación</p></div>
              <div className="stat"><h3>15k<span>+</span></h3><p>Clientes felices</p></div>
            </div>
          </div>
          <div className="hero-visual">
            <div className="hero-img-circle">🍔</div>
            <div className="float-card top-right">
              <div className="float-icon">⭐</div>
              <div className="float-text"><h4>Top Rated</h4><p>+2000 reseñas</p></div>
            </div>
            <div className="float-card bottom-left">
              <div className="float-icon">🚀</div>
              <div className="float-text"><h4>Envío rápido</h4><p>30 min promedio</p></div>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIAS */}
      <section className="section categories-section">
        <div className="section-container">
          <div className="section-header">
            <p className="section-sub">Explora</p>
            <h2 className="section-title">¿Qué te apetece hoy?</h2>
          </div>
          <div className="categories-grid">
            {categorias.map(cat => (
              <div 
                key={cat.id} 
                className={`category-card ${activeCategory === cat.nombre ? 'active' : ''}`}
                onClick={() => setActiveCategory(cat.nombre)}
              >
                <span className="category-icon">{cat.emoji}</span>
                <span className="category-name">{cat.nombre}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* MENU */}
      <section className="section" id="menu">
        <div className="section-container">
          <div className="section-header">
            <p className="section-sub">Nuestro menú</p>
            <h2 className="section-title">Platos más populares</h2>
            <p className="section-desc">Selecciona tus favoritos y ordénalos con un solo clic</p>
          </div>
          <div className="menu-grid">
            {filteredMenu.map(item => (
              <div key={item.id} className="menu-card">
                <div className="menu-img" style={{ background: item.bg }}>
                  {item.tag && <span className="menu-tag">{item.tag}</span>}
                  {item.emoji}
                </div>
                <div className="menu-info">
                  <div className="menu-info-top">
                    <h3 className="menu-name">{item.nombre}</h3>
                    <span className="menu-price">${item.precio.toFixed(2)}</span>
                  </div>
                  <p className="menu-desc">{item.desc}</p>
                  <div className="menu-meta">
                    <div className="menu-rating">⭐ {item.rating} <span>({item.pedidos})</span></div>
                    <div className="menu-time">🕐 {item.tiempo}</div>
                  </div>
                  <button className="add-btn" onClick={addToCart}>+ Agregar al carrito</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROMO */}
      <div className="section-container" id="ofertas">
        <div className="promo-section">
          <div className="promo-bg-circle"></div>
          <div className="promo-content">
            <h2>¡30% OFF en tu primer pedido!</h2>
            <p>Usa el código de descuento al momento de pagar y disfruta de la mejor comida al mejor precio.</p>
            <div className="promo-code">SABOR30</div>
          </div>
          <div className="promo-visual">🎉</div>
        </div>
      </div>

      {/* TESTIMONIOS */}
      <section className="section" id="resenas">
        <div className="section-container">
          <div className="section-header">
            <p className="section-sub">Reseñas</p>
            <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"La mejor hamburguesa que he probado por delivery. Llegó caliente y súper rápida. Definitivamente mi lugar favorito ahora."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👨</div>
                <div className="testimonial-name"><h4>Carlos M.</h4><p>Cliente frecuente</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"El sushi es increíble, fresco y muy bien presentado. La app es fácil de usar y el repartidor fue muy amable."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👩</div>
                <div className="testimonial-name"><h4>María L.</h4><p>Cliente nueva</p></div>
              </div>
            </div>
            <div className="testimonial-card">
              <div className="testimonial-stars">⭐⭐⭐⭐⭐</div>
              <p className="testimonial-text">"Pedí pizza para una reunión en casa y todos quedaron encantados. La masa perfecta y los ingredientes de primera."</p>
              <div className="testimonial-author">
                <div className="testimonial-avatar">👨‍💻</div>
                <div className="testimonial-name"><h4>Andrés R.</h4><p>Cliente frecuente</p></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-brand">
            <h2 style={{fontSize:'1.8rem', fontWeight:800}}>Sabor<span style={{color:'var(--naranja)'}}>Express</span></h2>
            <p>La mejor comida de la ciudad, entregada directamente en la puerta de tu casa con rapidez y calidad garantizada.</p>
            <div className="footer-socials">
              <a className="footer-social" href="#">f</a>
              <a className="footer-social" href="#">𝕏</a>
              <a className="footer-social" href="#">in</a>
              <a className="footer-social" href="#">📷</a>
            </div>
          </div>
          <div className="footer-col">
            <h3>Menú</h3>
            <ul>
              <li><a href="#">Hamburguesas</a></li>
              <li><a href="#">Pizzas</a></li>
              <li><a href="#">Sushi</a></li>
              <li><a href="#">Postres</a></li>
              <li><a href="#">Bebidas</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Compañía</h3>
            <ul>
              <li><a href="#">Sobre nosotros</a></li>
              <li><a href="#">Contacto</a></li>
              <li><a href="#">Trabaja con nosotros</a></li>
              <li><a href="#">Blog</a></li>
            </ul>
          </div>
          <div className="footer-col">
            <h3>Soporte</h3>
            <ul>
              <li><a href="#">Centro de ayuda</a></li>
              <li><a href="#">Términos y condiciones</a></li>
              <li><a href="#">Política de privacidad</a></li>
              <li><a href="#">PQR</a></li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>© 2026 SaborExpress. Todos los derechos reservados.</p>
        </div>
      </footer>
    </>
  )
}

export default App