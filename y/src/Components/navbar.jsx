const Navbar = () => {
    return(
        <>
            <section id="header">
                    <a href="#"><img id="logo" src="https://i.ibb.co/vqzY1gv/MediPlus.png"/></a>
                    <div>
                        <ul id="navbar">
                            <li><a href="index.html" className="active">Home</a></li>
                            <li><a href="store">Store</a></li>
                            <li><a href="blog.html">Book an appointment</a></li>
                            <li><a href="contact.html">Become a Seller</a></li>
                            <li><a href="cart.html" id="lg-bag"><i className="fal fa-shopping-bag"></i></a>
                                <span className="quantity">0</span>
                            </li>
                            <li><a href="#" id="close"><i className="far fa-times"></i></a></li>
                </ul>
            </div>
            <div id="mobile">
                <a href="cart.html"><i className="fal fa-shopping-bag"></i>
                    <span className="quantity">0</span>
                </a>
                <i id="bar" className="fas fa-outdent"></i>
            </div>
        </section>
        </>
    )
}
export default Navbar;