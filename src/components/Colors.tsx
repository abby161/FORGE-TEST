import React from 'react';

interface ColorsProps {
  className?: string;
}

export const Colors: React.FC<ColorsProps> = ({ className }) => {
  return <div className={className}>{}</div>;
};

export default Colors;
