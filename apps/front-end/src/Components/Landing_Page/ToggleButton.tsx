import React from 'react';

interface ToggleButtonProps {
  label: string;
  selected: boolean;
  onClick: () => void;
}

const ToggleButton: React.FC<ToggleButtonProps> = ({ label, selected, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 border-2 m-2 sx:m-0 rounded-full transition-colors duration-200 font-medium text-xl ${
        selected ? 'bg-white text-black' : 'bg-transparent text-white border-white'
      }`}
    >
      {label}
    </button>
  );
};

export default ToggleButton;
