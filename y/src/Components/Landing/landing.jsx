import '../../Styles/landing.css'
import Navbar from '../navbar.jsx'
import Header from '../Landing/header.jsx'
import ProductSlider1 from '../Landing/slider1.jsx'
import ProductSlider2 from '../Landing/slider2.jsx'

const landing = () => {
    return(
        <>
            <Navbar />
            <Header />
            <ProductSlider1 />
            <ProductSlider2 />
        </>
    );
};
export default landing;