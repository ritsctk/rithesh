// components/VideoBanner.js
import React from 'react'

export default function VideoBanner() {
    return (
      <div className="video-banner px-4">
      <video className="video" autoPlay muted loop playsInline>
        <source src="/videos/travel.mp4" type="video/mp4" />
      </video>
      {/* <div className="overlay">
        <h1>Welcome to Our Website</h1>
        <p>Your tagline or description goes here</p>
      </div> */}
    </div>
    )
}