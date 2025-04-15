import { useState } from 'react';
import "../../Styles/prodetails.css";


const ProductPage = () => {
  // State for product quantity
  const [quantity, setQuantity] = useState(1);
  
  // State for active tab
  const [activeTab, setActiveTab] = useState('description');
  
  // State for selected variants
  const [selectedPackSize, setSelectedPackSize] = useState('100');
  const [selectedAge, setSelectedAge] = useState('18-60');
  
  // Product data (in a real app, this would come from an API)
  const product = {
    id: 'MED00123',
    name: 'CuraSafe Liver Care Tablets',
    price: 189.50,
    originalPrice: 245.00,
    discount: 23,
    rating: 4.7,
    reviewCount: 742,
    stockStatus: 'In Stock',
    sku: 'MED-LV-123',
    brand: 'CuraPharma',
    images: [
      '/api/placeholder/400/400',
      '/api/placeholder/400/400',
      '/api/placeholder/400/400'
    ],
    packSizes: ['60', '100', '200'],
    ageGroup: ['12-18', '18-60', 'All Age Groups'],
    keyFeatures: [
      'Helps maintain healthy liver function',
      'Supports natural liver detoxification',
      'Contains natural herbal extracts',
      'Free from artificial preservatives',
      'Vegetarian friendly formula'
    ],
    description: 'CuraSafe Liver Care Tablets are specially formulated to support healthy liver function and promote natural detoxification processes. These tablets contain a proprietary blend of herbal extracts traditionally known for their hepatoprotective properties.',
    usage: 'Take 1-2 tablets twice daily after meals or as directed by your healthcare professional. For best results, use consistently for at least 4-6 weeks.',
    ingredients: 'Milk Thistle Extract (80% Silymarin), Dandelion Root Extract, Artichoke Leaf Extract, Turmeric Root Extract (95% Curcuminoids), Ginger Root Extract, Cellulose (Plant fiber), Vegetable Magnesium Stearate.',
    warnings: 'Keep out of reach of children. Not intended for use during pregnancy or nursing. If you have a medical condition or are taking medications, consult your healthcare professional before use.',
    manufacturerInfo: {
      name: 'CuraPharma Laboratories Ltd.',
      address: '123 Health Avenue, Medicity, MC 54321',
      license: 'FDA-LIC-12345',
      gmp: 'ISO 9001:2015 Certified'
    },
    batchDetails: {
      batchNumber: 'CPL22409B',
      mfgDate: '2024-08-15',
      expiryDate: '2026-08-14',
    },
    storageInstructions: 'Store in a cool, dry place below 30°C (86°F). Protect from direct sunlight and moisture.',
    offers: [
      { code: 'MEDI10', description: 'Get extra 10% Off on all CuraPharma products' },
      { code: 'CASHBACK', description: 'Get Upto ₹100 cashback using UPI payment' },
      { code: 'FREESHIP', description: 'Free shipping on orders above ₹499' }
    ]
  };
  
  // Similar products data
  const similarProducts = [
    {
      id: 'MED00124',
      name: 'HepaGuard Plus Tablets',
      price: 210.00,
      originalPrice: 250.00,
      discount: 16,
      rating: 4.5,
      image: '/api/placeholder/200/200',
      brand: 'NutriVital'
    },
    {
      id: 'MED00125',
      name: 'LiverVita Capsules',
      price: 175.00,
      originalPrice: 220.00,
      discount: 20,
      rating: 4.3,
      image: '/api/placeholder/200/200',
      brand: 'Herbalcare'
    },
    {
      id: 'MED00126',
      name: 'DetoxiLiv Syrup',
      price: 245.00,
      originalPrice: 290.00,
      discount: 15,
      rating: 4.6,
      image: '/api/placeholder/200/200',
      brand: 'VitaWell'
    },
    {
      id: 'MED00127',
      name: 'LiverPlus Tablets',
      price: 195.00,
      originalPrice: 230.00,
      discount: 15,
      rating: 4.4,
      image: '/api/placeholder/200/200',
      brand: 'MediNature'
    }
  ];
  
  // Reviews data
  const reviews = [
    {
      id: 1,
      name: 'Amita S.',
      avatar: 'AS',
      rating: 5,
      date: '12 Mar, 2025',
      content: 'I have been using this product for 3 months and have seen significant improvement in my liver function tests. My doctor is quite surprised with the results. Highly recommended for those with fatty liver issues!',
      helpful: 24,
      images: ['/api/placeholder/80/80']
    },
    {
      id: 2,
      name: 'Rahul K.',
      avatar: 'RK',
      rating: 4,
      date: '28 Feb, 2025',
      content: 'Good product overall. I noticed better digestion after a few weeks of use. The tablets are a bit large though, making them slightly difficult to swallow.',
      helpful: 15,
      images: []
    },
    {
      id: 3,
      name: 'Priya M.',
      avatar: 'PM',
      rating: 5,
      date: '15 Feb, 2025',
      content: 'Authentic product and delivered well before the expected date. Been using it for routine liver detox and feeling more energetic. Will buy again.',
      helpful: 9,
      images: ['/api/placeholder/80/80', '/api/placeholder/80/80']
    }
  ];

  // Rating distribution data
  const ratingDistribution = [
    { rating: 5, percentage: 70 },
    { rating: 4, percentage: 20 },
    { rating: 3, percentage: 7 },
    { rating: 2, percentage: 2 },
    { rating: 1, percentage: 1 }
  ];

  // Function to handle quantity changes
  const handleQuantityChange = (action) => {
    if (action === 'increase') {
      setQuantity(quantity + 1);
    } else if (action === 'decrease' && quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  // Function to render star ratings
  const renderStars = (rating) => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rating) {
        stars.push(<span key={i} className="star">★</span>);
      } else if (i - 0.5 <= rating) {
        stars.push(<span key={i} className="star half">★</span>);
      } else {
        stars.push(<span key={i} className="star empty">☆</span>);
      }
    }
    return stars;
  };

  return (
    <div className="product-page">
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="header-top">
            <div className="logo">
              <div className="logo-icon"></div>
              <div className="logo-text">Medi<span>Plus</span></div>
            </div>
            
            <div className="search-container">
              <div className="search-box">
                <input type="text" className="search-input" placeholder="Search medicines, health products and more..." />
                <button className="search-button">Search</button>
              </div>
            </div>
            
            <div className="header-actions">
              <a href="#" className="action-item">
                <div className="action-icon">👤</div>
                <div className="action-text">Account</div>
              </a>
              <a href="#" className="action-item">
                <div className="action-icon">❤️</div>
                <div className="action-text">Wishlist</div>
                <span className="badge">2</span>
              </a>
              <a href="#" className="action-item">
                <div className="action-icon">🛒</div>
                <div className="action-text">Cart</div>
                <span className="badge">3</span>
              </a>
            </div>
          </div>
        </div>
        
     
      </header>

      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <ul className="breadcrumb-list">
            <li className="breadcrumb-item">
              <a href="#" className="breadcrumb-link">Home</a>
              <span className="breadcrumb-separator">›</span>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="breadcrumb-link">Healthcare</a>
              <span className="breadcrumb-separator">›</span>
            </li>
            <li className="breadcrumb-item">
              <a href="#" className="breadcrumb-link">Liver Care</a>
              <span className="breadcrumb-separator">›</span>
            </li>
            <li className="breadcrumb-item">
              {product.name}
            </li>
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main className="main">
        <div className="container">
          {/* Product Layout */}
          <div className="product-layout">
            {/* Product Gallery */}
            <div className="product-gallery">
              <div className="main-image">
                <span className="discount-badge">{product.discount}% OFF</span>
                <img src={product.images[0]} alt={product.name} />
                <div className="zoom-icon">🔍</div>
              </div>
              
              <div className="thumbnail-list">
                {product.images.map((img, index) => (
                  <div key={index} className={`thumbnail ${index === 0 ? 'active' : ''}`}>
                    <img src={img} alt={`${product.name} - View ${index + 1}`} />
                  </div>
                ))}
              </div>
              
              <div className="share-buttons">
                <div className="share-title">Share:</div>
                <div className="share-buttons">
                  <div className="share-btn facebook">f</div>
                  <div className="share-btn twitter">t</div>
                  <div className="share-btn pinterest">p</div>
                  <div className="share-btn whatsapp">w</div>
                </div>
              </div>
            </div>

            {/* Product Info */}
            <div className="product-info">
              <h1 className="product-title">{product.name}</h1>
              
              <div className="product-meta">
                <div className="product-brand">
                  <span className="brand-icon">®</span>
                  <a href="#" className="brand-link">{product.brand}</a>
                </div>
                <div className="meta-divider"></div>
                <div className="product-sku">SKU: {product.sku}</div>
              </div>
              
              <div className="ratings-container">
                <div className="rating-stars">
                  {renderStars(product.rating)}
                </div>
                <a href="#reviews" className="rating-count">{product.rating} out of 5 ({product.reviewCount} reviews)</a>
              </div>
              
              <div className="price-container">
                <div className="price-row">
                  <div className="current-price">₹{product.price.toFixed(2)}</div>
                  <div className="old-price">₹{product.originalPrice.toFixed(2)}</div>
                  <div className="save-amount">Save ₹{(product.originalPrice - product.price).toFixed(2)}</div>
                </div>
                <div className="tax-info">Inclusive of all taxes</div>
              </div>
              
              <div className="stock-info">
                <div className="stock-badge in-stock">{product.stockStatus}</div>
                <div className="delivery-info">
                  <div className="delivery-icon">🚚</div>
                  <div className="delivery-text">
                    <strong>Delivery by Tomorrow</strong>, before 9:00 PM
                  </div>
                </div>
              </div>
              
              <div className="key-features">
                <div className="feature-title">Key Benefits</div>
                <ul className="feature-list">
                  {product.keyFeatures.map((feature, index) => (
                    <li key={index} className="feature-item">{feature}</li>
                  ))}
                </ul>
              </div>
              
              <div className="variants-section">
                <div className="variant-title">Pack Size</div>
                <div className="variant-options">
                  {product.packSizes.map((size) => (
                    <div 
                      key={size} 
                      className={`variant-option ${selectedPackSize === size ? 'selected' : ''}`}
                      onClick={() => setSelectedPackSize(size)}
                    >
                      {size} Tablets
                    </div>
                  ))}
                </div>
                
                <div className="variant-title">Age Group</div>
                <div className="variant-options">
                  {product.ageGroup.map((age) => (
                    <div 
                      key={age} 
                      className={`variant-option ${selectedAge === age ? 'selected' : ''}`}
                      onClick={() => setSelectedAge(age)}
                    >
                      {age}
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="quantity-selector">
                <div className="quantity-title">Quantity:</div>
                <div className="quantity-controls">
                  <button className="quantity-btn" onClick={() => handleQuantityChange('decrease')}>-</button>
                  <input type="number" className="quantity-input" value={quantity} readOnly />
                  <button className="quantity-btn" onClick={() => handleQuantityChange('increase')}>+</button>
                </div>
              </div>
              
              <div className="action-buttons">
                <button className="btn btn-primary">
                  <span className="btn-icon">🛒</span> Add to Cart
                </button>
                <button className="btn btn-outline">
                  <span className="btn-icon">⚡</span> Buy Now
                </button>
                <button className="btn btn-outline btn-icon-only">❤️</button>
              </div>
              
              <div className="offers-block">
                <div className="offers-title">
                  <span className="offers-icon">🎁</span>
                  Available Offers
                </div>
                <ul className="offer-list">
                  {product.offers.map((offer, index) => (
                    <li key={index} className="offer-item">
                      <div className="offer-badge">{offer.code.substring(0, 4)}</div>
                      <div className="offer-text">
                        {offer.description} <span className="offer-code">Code: {offer.code}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="product-meta-info">
                <div className="meta-row">
                  <div className="meta-label">Manufacturer:</div>
                  <div className="meta-value">{product.manufacturerInfo.name}</div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">Expiry Date:</div>
                  <div className="meta-value">{product.batchDetails.expiryDate}</div>
                </div>
                <div className="meta-row">
                  <div className="meta-label">Country of Origin:</div>
                  <div className="meta-value">India</div>
                </div>
              </div>
            </div>
          </div>

          {/* Product Tabs */}
          <div className="product-tabs">
            <div className="tabs-header">
              <div 
                className={`tab-item ${activeTab === 'description' ? 'active' : ''}`}
                onClick={() => setActiveTab('description')}
              >
                Description
              </div>
              <div 
                className={`tab-item ${activeTab === 'information' ? 'active' : ''}`}
                onClick={() => setActiveTab('information')}
              >
                Product Information
              </div>
              <div 
                className={`tab-item ${activeTab === 'reviews' ? 'active' : ''}`}
                onClick={() => setActiveTab('reviews')}
              >
                Reviews ({product.reviewCount})
              </div>
              <div 
                className={`tab-item ${activeTab === 'shipping' ? 'active' : ''}`}
                onClick={() => setActiveTab('shipping')}
              >
                Shipping & Returns
              </div>
            </div>
            
            {/* Description Tab Content */}
            <div className={`tab-content ${activeTab === 'description' ? 'active' : ''}`}>
              <div className="product-description">
                <div className="description-section">
                  <h3 className="section-title">Overview</h3>
                  <p className="description-text">{product.description}</p>
                </div>
                
                <div className="description-section">
                  <h3 className="section-title">Key Benefits</h3>
                  <ul className="description-list">
                    {product.keyFeatures.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                
                <div className="description-section">
                  <h3 className="section-title">Directions for Use</h3>
                  <p className="description-text">{product.usage}</p>
                </div>
                
                <div className="description-section">
                  <h3 className="section-title">Ingredients</h3>
                  <p className="description-text">{product.ingredients}</p>
                </div>
                
                <div className="description-section">
                  <h3 className="section-title">Safety Information</h3>
                  <p className="description-text">{product.warnings}</p>
                  <p className="description-text">{product.storageInstructions}</p>
                </div>
              </div>
            </div>
            
            {/* Information Tab Content */}
            <div className={`tab-content ${activeTab === 'information' ? 'active' : ''}`}>
              <div className="info-grid">
                <div className="info-card">
                  <h3 className="info-title">
                    <span className="info-icon">🏭</span>
                    Manufacturer Information
                  </h3>
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-label">Name</td>
                        <td className="info-value">{product.manufacturerInfo.name}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Address</td>
                        <td className="info-value">{product.manufacturerInfo.address}</td>
                      </tr>
                      <tr>
                        <td className="info-label">License No.</td>
                        <td className="info-value">{product.manufacturerInfo.license}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Certification</td>
                        <td className="info-value">{product.manufacturerInfo.gmp}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="info-card">
                  <h3 className="info-title">
                    <span className="info-icon">📋</span>
                    Product Details
                  </h3>
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-label">Product Name</td>
                        <td className="info-value">{product.name}</td>
                      </tr>
                      <tr>
                        <td className="info-label">SKU</td>
                        <td className="info-value">{product.sku}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Brand</td>
                        <td className="info-value">{product.brand}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Form</td>
                        <td className="info-value">Tablet</td>
                      </tr>
                      <tr>
                        <td className="info-label">Pack Size</td>
                        <td className="info-value">{selectedPackSize} Tablets</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="info-card">
                  <h3 className="info-title">
                    <span className="info-icon">📆</span>
                    Batch Details
                  </h3>
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-label">Batch Number</td>
                        <td className="info-value">{product.batchDetails.batchNumber}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Manufacturing Date</td>
                        <td className="info-value">{product.batchDetails.mfgDate}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Expiry Date</td>
                        <td className="info-value">{product.batchDetails.expiryDate}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Shelf Life</td>
                        <td className="info-value">24 Months</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                
                <div className="info-card">
                  <h3 className="info-title">
                    <span className="info-icon">⚠️</span>
                    Storage & Warnings
                  </h3>
                  <table className="info-table">
                    <tbody>
                      <tr>
                        <td className="info-label">Storage</td>
                        <td className="info-value">{product.storageInstructions}</td>
                      </tr>
                      <tr>
                        <td className="info-label">Warnings</td>
                        <td className="info-value">{product.warnings}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
            
            {/* Reviews Tab Content */}
            <div className={`tab-content ${activeTab === 'reviews' ? 'active' : ''}`} id="reviews">
              <div className="review-summary">
                <div className="review-average">
                  <div className="average-rating">{product.rating}</div>
                  <div className="average-stars">{renderStars(product.rating)}</div>
                  <div className="average-text">Based on {product.reviewCount} reviews</div>
                </div>
                
                <div className="review-distribution">
                  <div className="rating-bars">
                    {ratingDistribution.map((item) => (
                      <div key={item.rating} className="rating-bar">
                        <div className="rating-level">{item.rating} Star</div>
                        <div className="rating-progress">
                          <div className="rating-fill" style={{width: `${item.percentage}%`}}></div>
                        </div>
                        <div className="rating-percent">{item.percentage}%</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="review-actions">
                <div className="filter-dropdown">
                  <div className="dropdown-toggle">
                    Sort by: Most Recent <span>▼</span>
                  </div>
                  <div className="dropdown-menu">
                    <div className="dropdown-item">Most Recent</div>
                    <div className="dropdown-item">Highest Rating</div>
                    <div className="dropdown-item">Lowest Rating</div>
                    <div className="dropdown-item">Most Helpful</div>
                  </div>
                </div>
                
                <button className="btn btn-primary write-review-btn">Write a Review</button>
              </div>
              
              <div className="review-list">
                {reviews.map((review) => (
                  <div key={review.id} className="review-card">
                    <div className="review-header">
                      <div className="reviewer-info">
                        <div className="reviewer-avatar">{review.avatar}</div>
                        <div className="reviewer-details">
                          <div className="reviewer-name">{review.name}</div>
                          <div className="review-date">Verified Purchase • {review.date}</div>
                        </div>
                      </div>
                      <div className="review-rating">
                        {renderStars(review.rating)}
                      </div>
                    </div>
                    
                    <div className="review-content">
                      {review.content}
                    </div>
                    
                    {review.images.length > 0 && (
                      <div className="review-images">
                        {review.images.map((img, index) => (
                          <img key={index} src={img} alt="Review" className="review-img" />
                        ))}
                      </div>
                    )}
                    
                    <div className="review-footer">
                      <div className="review-helpful">
                        Was this helpful? <button className="helpful-btn">👍 Yes ({review.helpful})</button>
                      </div>
                      <div>Report</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Shipping Tab Content */}
            <div className={`tab-content ${activeTab === 'shipping' ? 'active' : ''}`}>
              <div className="shipping-info">
                <div className="description-section">
                  <h3 className="section-title">Shipping Information</h3>
                  <p className="description-text">
                    We offer fast and reliable shipping across the country. Orders are typically processed within 24 hours and delivered within 1-3 business days depending on your location.
                  </p>
                  <ul className="description-list">
                    <li>Free standard shipping on orders above ₹499</li>
                    <li>Express delivery available for select locations (additional charges may apply)</li>
                    <li>Cash on delivery available for orders under ₹5000</li>
                    <li>Track your order in real-time through our app or website</li>
                  </ul>
                </div>
                
                <div className="description-section">
                  <h3 className="section-title">Return Policy</h3>
                  <p className="description-text">
                    Due to the nature of pharmaceutical products, medicines and healthcare products have specific return policies:
                  </p>
                  <ul className="description-list">
                    <li>Medicine returns are accepted only if there is a discrepancy or damage in the shipment</li>
                    <li>Return requests must be placed within 24 hours of delivery</li>
                    <li>Products must be unopened and in their original packaging</li>
                    <li>Prescription medicines cannot be returned once dispensed unless theres a quality issue</li>
                    <li>Refunds will be processed within 5-7 working days after inspection</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Similar Products */}
          <div className="similar-products">
            <h2 className="section-title">Similar Products</h2>
            <div className="product-grid">
              {similarProducts.map((product) => (
                <div key={product.id} className="product-card">
                  <div className="product-badge">{product.discount}% OFF</div>
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-content">
                    <div className="product-brand">{product.brand}</div>
                    <h3 className="product-name">{product.name}</h3>
                    <div className="product-rating">
                      {renderStars(product.rating)}
                    </div>
                    <div className="product-prices">
                      <div className="current-price">₹{product.price.toFixed(2)}</div>
                      <div className="old-price">₹{product.originalPrice.toFixed(2)}</div>
                    </div>
                    <button className="add-to-cart-btn">Add to Cart</button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>

      {/* Footer would go here */}
    </div>
  );
};

export default ProductPage;