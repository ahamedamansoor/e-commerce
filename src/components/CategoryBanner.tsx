import React from 'react';
import { Link } from 'react-router-dom';

interface CategoryBannerProps {
  title: string;
  description: string;
  imageUrl: string;
  link: string;
  position?: 'left' | 'right';
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({ 
  title, 
  description, 
  imageUrl, 
  link,
  position = 'left'
}) => {
  return (
    <div className="relative overflow-hidden bg-cream-100 rounded-lg mb-8 md:mb-16">
      <div className={`flex flex-col ${position === 'right' ? 'md:flex-row-reverse' : 'md:flex-row'}`}>
        <div className="md:w-1/2">
          <img 
            src={imageUrl} 
            alt={title}
            className="object-cover w-full h-full max-h-[500px] md:max-h-none"
          />
        </div>
        
        <div className="md:w-1/2 p-8 md:p-12 flex items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-heading mb-4">{title}</h2>
            <p className="text-navy-700 mb-6 max-w-md">{description}</p>
            <Link 
              to={link}
              className="btn btn-primary"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CategoryBanner;