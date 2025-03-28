import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BlogPage() {
  return (
    <motion.div initial={{opacity:0,translateX:"-100%"}}
    whileInView={{opacity:1,translateX:0}}
    transition={{duration:2}} className="blog-page">
      <h1 className="blog-title">Our Blog</h1>
      <p className="blog-subtitle">Stay updated with the latest trends, guides, and exclusive offers!</p>
      
      <div className="blog-section">
        <h2 className="blog-category">Product Guides & Reviews</h2>
        <ul className="blog-list">
          <li><Link to="/blog/best-sneakers" className="blog-link">How to Choose the Best Sneakers for Your Needs</Link></li>
          <li><Link to="/blog/top-running-shoes" className="blog-link">Top 10 Must-Have Running Shoes for 2025</Link></li>
          <li><Link to="/blog/fresh-foam-review" className="blog-link">Honest Review: New Balance Fresh Foam - Is It Worth Buying?</Link></li>
        </ul>
      </div>

      <div className="blog-section">
        <h2 className="blog-category">Shopping Tips & Tricks</h2>
        <ul className="blog-list">
          <li><Link to="/blog/save-money-shopping" className="blog-link">5 Ways to Save Money While Shopping Online</Link></li>
          <li><Link to="/blog/spot-fake-shoes" className="blog-link">How to Spot Fake Sneakers and Buy Authentic Pairs</Link></li>
          <li><Link to="/blog/seasonal-sales-guide" className="blog-link">A Complete Guide to Seasonal Sales & Discounts</Link></li>
        </ul>
      </div>

      <div className="blog-section">
        <h2 className="blog-category">Behind the Scenes</h2>
        <ul className="blog-list">
          <li><Link to="/blog/our-story" className="blog-link">The Story Behind Shopty – How We Started</Link></li>
          <li><Link to="/blog/quality-check" className="blog-link">How We Ensure Quality in Our Sneakers</Link></li>
          <li><Link to="/blog/meet-the-team" className="blog-link">Meet the Team – The People Behind Shopty</Link></li>
        </ul>
      </div>

      <div className="blog-section">
        <h2 className="blog-category">Customer Stories & Testimonials</h2>
        <ul className="blog-list">
          <li><Link to="/blog/customer-stories" className="blog-link">How Our Sneakers Helped Runners Achieve Their Goals</Link></li>
          <li><Link to="/blog/customer-spotlight" className="blog-link">Customer Spotlight: Mark’s Experience with Shopty</Link></li>
          <li><Link to="/blog/share-reviews" className="blog-link">Your Reviews Matter! Share Your Thoughts and Get Featured</Link></li>
        </ul>
      </div>

      <div className="blog-section">
        <h2 className="blog-category">Industry News & Trends</h2>
        <ul className="blog-list">
          <li><Link to="/blog/sneaker-trends" className="blog-link">Latest Trends in Sneakers You Need to Know</Link></li>
          <li><Link to="/blog/summer-trends" className="blog-link">Upcoming Shoe Trends for Summer 2025</Link></li>
          <li><Link to="/blog/sneaker-tech" className="blog-link">How Technology is Changing the Sneaker Industry</Link></li>
        </ul>
      </div>

      <div className="blog-section">
        <h2 className="blog-category">Gift Guides & Recommendations</h2>
        <ul className="blog-list">
          <li><Link to="/blog/gift-ideas" className="blog-link">Best Gift Ideas for Sneaker Lovers</Link></li>
          <li><Link to="/blog/gift-guide" className="blog-link">What to Buy for Someone Who Has Everything?</Link></li>
          <li><Link to="/blog/custom-sneakers" className="blog-link">Personalized Sneaker Gift Ideas for Your Loved Ones</Link></li>
        </ul>
      </div>

      <div className="blog-section">
        <h2 className="blog-category">How-To & DIY Guides</h2>
        <ul className="blog-list">
          <li><Link to="/blog/sneaker-care" className="blog-link">How to Take Care of Your Sneakers for Long-Lasting Wear</Link></li>
          <li><Link to="/blog/sneaker-styling" className="blog-link">Creative Ways to Style Your Sneakers</Link></li>
          <li><Link to="/blog/diy-customization" className="blog-link">DIY Customization: How to Paint Your Sneakers</Link></li>
        </ul>
      </div>

      <div className="blog-section">
        <h2 className="blog-category">Exclusive Deals & Announcements</h2>
        <ul className="blog-list">
          <li><Link to="/blog/new-arrivals" className="blog-link">New Arrivals – Check Out Our Latest Sneaker Collection!</Link></li>
          <li><Link to="/blog/limited-deals" className="blog-link">Limited-Time Offers – Grab the Best Deals Today</Link></li>
          <li><Link to="/blog/sales-announcement" className="blog-link">Upcoming Sales & Special Discounts – What You Need to Know</Link></li>
        </ul>
      </div>
      
    </motion.div>
  );
}

export default BlogPage;
