import React from "react";

interface LogoBoxProps {
  title?: string;
}
function LogoBox({ title = "Todo" }: LogoBoxProps) {
  return (
    <div className="logo_box">
      <a href="">
        <h1>{title}</h1>
      </a>
    </div>
  );
}

export default LogoBox;
