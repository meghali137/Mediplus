// ProductPage.jsx
import  { useState } from 'react';
import "../../Styles/ProductPage.css";

const ProductPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  

  const product = {
    id: "med-123",
    name: "Premium Blood Pressure Monitor",
    price: 89.99,
    discountPrice: 69.99,
    rating: 4.8,
    reviewCount: 245,
    stockStatus: "In Stock",
    sku: "BP-MON-2023",
    description: "Accurate and easy-to-use blood pressure monitor for home use. Features a large digital display and memory function to store previous readings.",
    specifications: [
      { name: "Measurement Range", value: "0-299 mmHg" },
      { name: "Accuracy", value: "±3 mmHg" },
      { name: "Memory", value: "Up to 120 readings" },
      { name: "Power Source", value: "4 AAA batteries or AC adapter" },
      { name: "Dimensions", value: "4.7 x 3.9 x 2.8 inches" },
      { name: "Weight", value: "12.3 oz" },
      { name: "Warranty", value: "2 years" }
    ],
    images: [
      "/api/placeholder/500/500", 
      "/api/placeholder/500/500", 
      "/api/placeholder/500/500"
    ],
    features: [
      "Clinically validated accuracy",
      "Large, easy-to-read backlit display",
      "Irregular heartbeat detection",
      "Multi-user memory function",
      "Automatic shut-off to conserve battery"
    ],
    similarProducts: [
      {
        id: "med-124",
        name: "Standard Blood Pressure Monitor",
        price: 59.99,
        image: "/api/placeholder/200/200",
        rating: 4.5
      },
      {
        id: "med-125",
        name: "Digital Pulse Oximeter",
        price: 39.99,
        image: "/api/placeholder/200/200",
        rating: 4.7
      },
      {
        id: "med-126",
        name: "Wireless Blood Pressure Monitor",
        price: 99.99,
        image: "/api/placeholder/200/200",
        rating: 4.9
      },
      {
        id: "med-127",
        name: "Blood Glucose Monitor Kit",
        price: 79.99,
        image: "/api/placeholder/200/200",
        rating: 4.6
      }
    ]
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value);
    if (value > 0) {
      setQuantity(value);
    }
  };

  const decrementQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  const incrementQuantity = () => {
    setQuantity(quantity + 1);
  };

  const addToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to your cart!`);
    // Here you would implement your actual cart functionality
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;
    
    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={`full-${i}`} className="star full">★</span>);
    }
    
    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }
    
    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">☆</span>);
    }
    
    return stars;
  };

  return (
    <div className="product-page">
      <div className="breadcrumb">
        <span>Home</span> &gt; <span>Medical Devices</span> &gt; <span>Monitors</span> &gt; <span>{product.name}</span>
      </div>
      
      <div className="product-container">
        <div className="product-gallery">
          <div className="main-image">
            <img src={product.images[0]} alt={product.name} />
          </div>
          <div className="thumbnail-container">
            {product.images.map((img, index) => (
              <div key={index} className="thumbnail">
                <img src={img} alt={`${product.name} view ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        
        <div className="product-details">
          <h1 className="product-title">{product.name}</h1>
          
          <div className="product-meta">
            <div className="product-rating">
              {renderStars(product.rating)}
              <span className="rating-text">{product.rating} ({product.reviewCount} reviews)</span>
            </div>
            <div className="product-sku">SKU: {product.sku}</div>
          </div>
          
          <div className="product-pricing">
            {product.discountPrice ? (
              <>
                <span className="original-price">₹{product.price.toFixed(2)}</span>
                <span className="discount-price">₹{product.discountPrice.toFixed(2)}</span>
                <span className="save-badge">
                  Save ₹{(product.price - product.discountPrice).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="regular-price">₹{product.price.toFixed(2)}</span>
            )}
          </div>
          
          <div className="stock-status">
            <span className={`status-indicator ₹{product.stockStatus === "In Stock" ? "in-stock" : "out-of-stock"}`}></span>
            {product.stockStatus}
          </div>
          
          <div className="product-purchase">
            <div className="quantity-selector">
              <span className="quantity-label">Quantity:</span>
              <div className="quantity-controls">
                <button className="quantity-btn" onClick={decrementQuantity}>−</button>
                <input 
                  type="number" 
                  value={quantity} 
                  onChange={handleQuantityChange} 
                  min="1" 
                  className="quantity-input"
                />
                <button className="quantity-btn" onClick={incrementQuantity}>+</button>
              </div>
            </div>
            
            <button className="add-to-cart-btn" onClick={addToCart}>
              Add to Cart
            </button>
            
            <button className="wishlist-btn">
              ♡ Add to Wishlist
            </button>
          </div>
          
          <div className="shipping-info">
            <div className="info-item">
              <i className="icon-shipping"></i>
              <span>Free shipping on orders over ₹75</span>
            </div>
            <div className="info-item">
              <i className="icon-return"></i>
              <span>30-day hassle-free returns</span>
            </div>
            <div className="info-item">
              <i className="icon-secure"></i>
              <span>Secure checkout</span>
            </div>
          </div>
        </div>
      </div>
      
      <div className="product-tabs">
        <div className="tab-buttons">
          <button 
            className={activeTab === 'description' ? 'active' : ''} 
            onClick={() => setActiveTab('description')}
          >
            Description
          </button>
          <button 
            className={activeTab === 'specifications' ? 'active' : ''} 
            onClick={() => setActiveTab('specifications')}
          >
            Specifications
          </button>
          <button 
            className={activeTab === 'features' ? 'active' : ''} 
            onClick={() => setActiveTab('features')}
          >
            Features
          </button>
          <button 
            className={activeTab === 'reviews' ? 'active' : ''} 
            onClick={() => setActiveTab('reviews')}
          >
            Reviews ({product.reviewCount})
          </button>
        </div>
        
        <div className="tab-content">
          {activeTab === 'description' && (
            <div className="tab-description">
              <p>{product.description}</p>
            </div>
          )}
          
          {activeTab === 'specifications' && (
            <div className="tab-specifications">
              <table>
                <tbody>
                  {product.specifications.map((spec, index) => (
                    <tr key={index}>
                      <td className="spec-name">{spec.name}</td>
                      <td className="spec-value">{spec.value}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
          {activeTab === 'features' && (
            <div className="tab-features">
              <ul>
                {product.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          )}
          
          {activeTab === 'reviews' && (
            <div className="tab-reviews">
              <div className="review-summary">
                <div className="average-rating">
                  <span className="rating-number">{product.rating}</span>
                  <div className="rating-stars">
                    {renderStars(product.rating)}
                  </div>
                  <span className="review-count">Based on {product.reviewCount} reviews</span>
                </div>
              </div>
              
              <div className="review-cta">
                <p>Share your experience with this product</p>
                <button className="write-review-btn">Write a Review</button>
              </div>
              
              {/* Sample review - in a real app you would map through actual reviews */}
              <div className="review-item">
                <div className="review-header">
                  <div className="reviewer-info">
                    <span className="reviewer-name">John D.</span>
                    <span className="review-date">February 15, 2025</span>
                  </div>
                  <div className="review-rating">
                    {renderStars(5)}
                  </div>
                </div>
                <h4 className="review-title">Excellent product, very accurate!</h4>
                <p className="review-content">
                  I've been using this monitor for two months now and it's extremely reliable. 
                  Readings match what I get at my doctor's office. The display is easy to read 
                  and the memory function is very helpful.
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      <div className="similar-products">
        <h2>Similar Products</h2>
        <div className="product-slider">
          {product.similarProducts.map((item) => (
            <div key={item.id} className="product-card">
              <div className="product-card-image">
                <img src={item.image} alt={item.name} />
              </div>
              <h3 className="product-card-title">{item.name}</h3>
              <div className="product-card-rating">
                {renderStars(item.rating)}
              </div>
              <div className="product-card-price">${item.price.toFixed(2)}</div>
              <button className="quick-view-btn">Quick View</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductPage;