'use client'
import React from 'react'
import Slider from 'react-slick'; // Import the Slider component
import 'slick-carousel/slick/slick.css'; // Import slick CSS
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme CSS
import Image from 'next/image'; // Add this import at the top

const companies = [
    { id: 1, name: 'Google', logo: 'https://upload.wikimedia.org/wikipedia/commons/2/24/Google_logo_2015.svg' },
    { id: 2, name: 'Facebook', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Facebook_f_logo_%282019%29.svg' },
    { id: 3, name: 'Amazon', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg' },
    { id: 4, name: 'Microsoft', logo: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg' },
    { id: 5, name: 'Apple', logo: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg' },
    { id: 6, name: 'Netflix', logo: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Netflix_logo.svg' },
    { id: 7, name: 'Tesla', logo: 'https://upload.wikimedia.org/wikipedia/commons/e/e8/Tesla_logo.svg' },
    { id: 8, name: 'IBM', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg' },
    { id: 9, name: 'Upwork', logo: 'https://upload.wikimedia.org/wikipedia/commons/5/51/Upwork_logo.svg' },
 
  ];
  
const CompanySlider = () => {
      // Slider settings
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    
  };

  return (
    <div>
      
      <Slider {...settings}>
        {companies.map(company => (
          <div key={company.id} className="flex items-center justify-center">
            
            <Image src={company.logo} alt={company.name} width={30} height={30} />
          </div>
        ))}
      </Slider>
      
      
    </div>
  )
}

export default CompanySlider
