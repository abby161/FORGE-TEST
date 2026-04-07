import React from 'react';

interface Property1defaultProps {
  className?: string;
}

export const Property1default: React.FC<Property1defaultProps> = ({ className }) => {
  return <div className={className}>{}</div>;
};

export default Property1default;
