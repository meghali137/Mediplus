import '../Styles/navbar.css'
import dark_toggle from '../assets/dark_toggle.png'
import light_toggle from '../assets/light_toggle.jpg'
import med_logo from '../assets/med_logo.png'

const Navbar = ({theme, setTheme}) => {

    const toggle_mode = () => {
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
    return(
        <>
            <div className="navbar">
                    <a href="#"><img className="logo" src={med_logo}/></a>
        
                        <ul>
                            <li><a href="index.html" className="active">Home</a></li>
                            <li><a href="store">Store</a></li>
                            <li><a href="blog.html">Book an appointment</a></li>
                            <li><a href="contact.html">Lab Tests</a></li>
                            <li><a href="contact.html">Health Blogs</a></li>
                            <li><a href="contact.html">HealthCare</a></li>
                            <li><a href="contact.html">Become a Seller</a></li>
                           
                            
                </ul>
                

                <div className="search">
                    <input type = "text" placeholder='Search' />
                    
            
            </div>
            <img onClick= {toggle_mode} src={theme == 'light' ? dark_toggle : light_toggle} alt=" " className="toggle" />
            
            </div>
            
        </>
    )
}
export default Navbar;