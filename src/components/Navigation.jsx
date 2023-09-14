const Navigation=()=>{
    return(
        <nav className="container"> 
    <div className="logo">
    <img src="/images/brand_logo.png" alt="logo"/>
    </div>
    <ul>
        <li className="icon-hover" href="#">Menu</li>
        <li className="icon-hover" href="#">Location</li>
        <li className="icon-hover" href="#">About</li>
        <li className="icon-hover" href="#">Contact</li>
    </ul>
    <button className="icon-hover">login</button>
</nav>
    )
}
export default Navigation;