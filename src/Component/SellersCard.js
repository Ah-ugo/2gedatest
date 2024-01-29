import React from "react";

export default function SellersCard({ img }) {
  return (
    <div>
      <img
        src={img}
        style={
          {
            //   borderRadius: "50%",
            //   width: "45px",
            //   height: "45px",
            //   flexShrink: 0,
          }
        }
      />
    </div>
  );
}
