const ComputerIcon = (props) => {
    return (
      <svg
        width={20}
        height={20}
        viewBox="0 0 64 64"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-5 inline-block transition-transform group-hover:rotate-[20deg]"
        {...props}
      >
        {/* Computer Monitor */}
        <rect
          x="8"
          y="8"
          width="48"
          height="32"
          rx="4"
          ry="4"
          fill="currentColor"
          stroke="currentColor"
          strokeWidth="1"
        />
        {/* Screen */}
        <rect
          x="12"
          y="12"
          width="40"
          height="24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        />
        {/* Stand */}
        <rect
          x="26"
          y="42"
          width="12"
          height="4"
          rx="1"
          ry="1"
          fill="currentColor"
        />
        {/* Base */}
        <rect
          x="20"
          y="48"
          width="24"
          height="6"
          rx="2"
          ry="2"
          fill="currentColor"
        />
        {/* Details */}
        <line
          x1="8"
          y1="46"
          x2="56"
          y2="46"
          stroke="currentColor"
          strokeWidth="2"
        />
      </svg>
    );
  };
  
  export default ComputerIcon;
  