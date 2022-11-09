export default function Navbar() {
    return <nav className="nav">
        <a href="/" className="nav-brand">UniQ</a>
        <ul>
            <li><a href="#" className="nav-items">Home</a></li>
            <li><a href="#Features" className="nav-items">Features</a></li>
            <li><a href="#Contact" className="nav-items">Contact</a></li>
            <li><button className="nav-item-register" >Register</button></li>
        </ul>
    </nav>
}