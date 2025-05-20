
import React from 'react';

interface AngularBracketProps {
  className?: string;
  fill?: string;
  width?: number;
  height?: number;
}

const AngularBracket = ({
  className = "",
}: AngularBracketProps) => {
  return (
    <span
      className={className}
    >&lt;
    </span>
  );
};

export default AngularBracket;
