// components/ScrollButton.tsx
interface ScrollButtonProps {
  direction: "left" | "right";
  onClick: () => void;
}

const ScrollButton: React.FC<ScrollButtonProps> = ({ direction, onClick }) => (
  <button
    className={`absolute ${
      direction === "left" ? "left-[-20px]" : "right-[-20px]"
    } top-1/2 transform -translate-y-1/2 z-10 bg-white dark:bg-gray-800 shadow-lg rounded-full p-2 hidden md:block hover:bg-gray-100 dark:hover:bg-gray-700`}
    onClick={onClick}
  >
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          direction === "left"
            ? "M15 19.5L7.5 12L15 4.5"
            : "M9 4.5L16.5 12L9 19.5"
        }
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
);

export default ScrollButton;
