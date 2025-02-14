import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../../Styles/slider2.css";


const products = [
  {
    image: "/images/pill-organizer.jpg",
    title: "Himalaya Liv.52 Tablets - 100'S",
    price: "₹799.00",
    oldPrice: "₹1,799.00",
    discount: "56% off",
    rating: 4.5,
    bought: "200+ bought in past month",
  },
  {
    image: "/images/pee-buddy.jpg",
    title: "Himalaya Liv.52 Tablets - 100'S",
    price: "₹215.00",
    oldPrice: "₹2,444.00",
    discount: "76%",
    rating: 4.7,
    bought: "300+ bought in past month",
  },
  {
    image: "/images/medicine-box.jpg",
    title: "Himalaya Liv.52 Tablets - 100'S",
    price: "₹156.00",
    oldPrice: "₹599.00",
    discount: "74% off",
    rating: 4.3,
    bought: "10K+ bought in past month",
  },
  {
    image: "/images/medicine-box.jpg",
    title: "Himalaya Liv.52 Tablets - 100'S",
    price: "₹150.00",
    oldPrice: "₹999.00",
    discount: "74% off",
    rating: 4.3,
    bought: "1K+ bought in past month",
  },
  {
    image: "/images/medicine-box.jpg",
    title: "Himalaya Liv.52 Tablets - 100'S",
    price: "₹156.00",
    oldPrice: "₹599.00",
    discount: "74% off",
    rating: 4.3,
    bought: "3K+ bought in past month",
  },
  {
    image: "/images/medicine-box.jpg",
    title: "Himalaya Liv.52 Tablets - 100'S",
    price: "₹156.00",
    oldPrice: "₹599.00",
    discount: "74% off",
    rating: 4.3,
    bought: "6K+ bought in past month",
  },
];

const ProductSlider2 = () => {
  return (
    <div className="product-slider">
      <h2 className="slider-heading">Daily Essentials</h2> {/* Added heading */}
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={20}
        slidesPerView={4}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 4000 }}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 4 },
        }}
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="product-card">
              <img src={product.image} alt={product.title} />
              <h3>{product.title}</h3>
              <p className="price">
                <span className="current">{product.price}</span>
                {product.oldPrice && (
                  <span className="old-price">{product.oldPrice}</span>
                )}
              </p>
              {product.discount && <p className="discount">{product.discount}</p>}
              
              
              <p className="bought">{product.bought}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ProductSlider2;
