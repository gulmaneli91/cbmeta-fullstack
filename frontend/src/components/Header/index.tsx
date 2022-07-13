import "./styles.css";
import Logo from "../../../assets/img/cb.svg";

function Header (){
    return (
        <header>
        <div className="logo-container">
            <img src= { Logo } alt="ConnectBurguer" />
            <h1>Connect Burguer</h1>
            <p>Created by 
                <a href="linkedin.com/in/ailton-gulmaneli-5157a8139">Ailton Gulmaneli</a>
                
            </p>
        </div>
    </header>
    )
}

export default  Header;