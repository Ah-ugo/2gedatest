import React from "react";

export default function ReviewsComponent({ name, review }) {
  return (
    <div>
      <div className="w-full justify-between items-start inline-flex">
        <div className="flex-col justify-start items-start gap-1.5 inline-flex">
          <div className="text-black text-opacity-80 text-xs font-medium font-['Ubuntu']">
            {name ? name : "Sam Loco"}
          </div>
          <div className="text-black text-opacity-60 text-xs font-normal font-['Ubuntu']">
            {review ? review : `“Good customer services always”`}
          </div>
        </div>
        <div className="w-8 relative">
          <div className="left-[16px] top-0 absolute text-stone-950 text-opacity-60 text-xs font-normal font-['Ubuntu']">
            4.5
          </div>
          <div className="w-4 h-4 left-0 top-0 absolute">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none">
              <path
                d="M14.95 6.0875C14.8874 5.89061 14.7668 5.71723 14.604 5.59009C14.4412 5.46294 14.2437 5.38797 14.0375 5.375L10.325 5.11875L8.95002 1.65C8.87494 1.459 8.74426 1.29494 8.57488 1.17905C8.40551 1.06317 8.20525 1.00079 8.00002 1C7.7948 1.00079 7.59454 1.06317 7.42516 1.17905C7.25579 1.29494 7.1251 1.459 7.05002 1.65L5.65002 5.1375L1.96252 5.375C1.75659 5.38881 1.55954 5.4641 1.39686 5.59112C1.23418 5.71814 1.11336 5.89106 1.05002 6.0875C0.984985 6.28695 0.981185 6.50131 1.03911 6.70294C1.09704 6.90458 1.21404 7.08423 1.37502 7.21875L4.21252 9.61875L3.36877 12.9375C3.3104 13.162 3.3209 13.3989 3.39892 13.6174C3.47695 13.8358 3.61888 14.0258 3.80627 14.1625C3.98817 14.293 4.20488 14.3664 4.42867 14.373C4.65247 14.3797 4.87316 14.3195 5.06252 14.2L7.99377 12.3438H8.00627L11.1625 14.3375C11.3244 14.4427 11.5132 14.4991 11.7063 14.5C11.8639 14.4988 12.0192 14.4614 12.1602 14.3908C12.3011 14.3201 12.424 14.2181 12.5194 14.0926C12.6147 13.967 12.68 13.8213 12.7103 13.6666C12.7405 13.5118 12.7349 13.3522 12.6938 13.2L11.8 9.56875L14.625 7.21875C14.786 7.08423 14.903 6.90458 14.9609 6.70294C15.0189 6.50131 15.0151 6.28695 14.95 6.0875Z"
                fill="#FF8A15"
              />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
