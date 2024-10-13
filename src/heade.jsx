
// import './App.css'
import logo from './img/Logo.png'
import './Components/css/hero.css'
// import logho from './img/Logo.png'


function Header() {

  return (
    <>
    <div className="cart_hero">
          <img src="{logho}" alt="" />
            <div className="top_hero_section">
                <img src={logo} alt="School Logo"/> 
                <h1>Satarpara secondary School</h1>
                <p>School Id: 20202 04</p>
                <p> Address: Satarpara,Daulatpur,Kushtia 7000</p>
            </div>
        </div>
    </>
  )
}

export default Header
