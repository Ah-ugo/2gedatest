import React from "react";

export default function CartItemCard({ img, name, price, location }) {
  return (
    <div style={{ marginBottom: 10 }}>
      <div className="w-full h-auto justify-between items-center gap-2 inline-flex flex-col lg:flex-row xl:flex-row lg:gap-8 xl:gap-8">
        <div className="justify-between items-center gap-1.5 flex">
          <img className="w-11 h-11 rounded" src={img} />
          <div className="flex-col justify-start items-start gap-0.5 inline-flex">
            <div className="text-black text-opacity-60 text-xs font-medium font-['Ubuntu']">
              {name}
            </div>
            <div className="text-black text-opacity-60 text-xs font-bold font-['Ubuntu']">
              {price}
            </div>
            <div className="text-black text-opacity-60 text-xs font-light font-['Ubuntu']">
              {location}
            </div>
          </div>
        </div>
        <div className="justify-start items-start gap-2 flex">
          <div className="p-1 bg-orange-500 rounded justify-start items-start gap-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none">
              <path
                d="M3.92298 10.0902C3.92298 10.6543 4.38452 11.1158 4.94862 11.1158H9.05118C9.61528 11.1158 10.0768 10.6543 10.0768 10.0902V3.93635H3.92298V10.0902ZM10.5896 2.39789H8.79477L8.28195 1.88507H5.71785L5.20503 2.39789H3.41016V3.42353H10.5896V2.39789Z"
                fill="black"
              />
            </svg>
          </div>
          <div className="p-1 bg-violet-900 rounded justify-start items-start gap-2 flex">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="13"
              viewBox="0 0 14 13"
              fill="none">
              <g clip-path="url(#clip0_2_935)">
                <path
                  d="M2.26631 2.23962C1.4824 2.23962 0.846191 2.87584 0.846191 3.65974V9.34022C0.846191 10.1241 1.4824 10.7603 2.26631 10.7603H11.7338C12.5177 10.7603 13.1539 10.1241 13.1539 9.34022V3.65974C13.1539 2.87584 12.5177 2.23962 11.7338 2.23962H2.26631ZM2.26631 3.18637H11.7338C11.9946 3.18637 12.2071 3.39891 12.2071 3.65974V3.89643L7.00004 6.70732L1.79294 3.89643V3.65974C1.79294 3.39891 2.00548 3.18637 2.26631 3.18637ZM1.79294 4.02945L4.88453 6.44081L1.85211 9.54755L5.55057 6.91418L7.00004 7.84625L8.44998 6.91418L12.148 9.54755L9.11554 6.44081L12.2071 4.02945V9.34022C12.2045 9.4131 12.1842 9.48426 12.148 9.54755C12.0699 9.7014 11.9179 9.81359 11.7338 9.81359H2.26631C2.08217 9.81359 1.93022 9.70187 1.85211 9.54755C1.81594 9.4844 1.79563 9.41294 1.79294 9.34022V4.02945Z"
                  fill="white"
                />
              </g>
              <defs>
                <clipPath id="clip0_2_935">
                  <rect
                    width="12.3077"
                    height="12.3077"
                    fill="white"
                    transform="translate(0.846191 0.34613)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}
