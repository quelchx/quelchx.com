import React from "react";
interface TooltipProps {
  text: string;
  children: React.ReactNode;
  link?: string;
};

const Tooltip = ({ text, children, link }: TooltipProps) => {
  return (
    <a
      data-tooltip-target="tooltip-default"
      type="button"
      className="pb-0.5 text-gray-400 hvr-buzz-out hover:text-gray-500"
      href={link}
    >
      <div
        id="tooltip-default"
        role="tooltip"
        className="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm opacity-0 tooltip dark:bg-gray-700"
      >
        {text}
        <div className="tooltip-arrow" data-popper-arrow></div>
      </div>
      {children}
    </a>
  );
};

export default Tooltip;
