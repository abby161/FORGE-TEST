import React from 'react';

interface Property1blockDefaultProps {
  className?: string;
}

export const Property1blockDefault: React.FC<Property1blockDefaultProps> = ({ className }) => {
  return <div className={className}>{}</div>;
};

export default Property1blockDefault;
