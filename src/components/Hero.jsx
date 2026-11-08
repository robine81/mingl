import heroImage from '../assets/hero.png'

export default function Hero() {
  return (
    <main className="main-content">
      <h1>TRÄFFA NYA VÄNNER!</h1>
      <p className="lead">Börja göra saker tillsammans.</p>

      <div className="image-container">
        <img src={heroImage} alt="Människor som skrattar och äter middag tillsammans" />
      </div>

      <p className="cta-text">Delta i våra aktiviteter som middagar och gruppträffar.</p>
    </main>
  )
}
