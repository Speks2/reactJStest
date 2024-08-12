import style from "./Navbar.module.scss"


export const Navbar = () => {
    return (
     <nav className={style.navbarStyle}>
      <ul>
        <li>Home</li>
        <li>Contact</li>
        <li>Products</li>
      </ul> 
     </nav>
    );
}