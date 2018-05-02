"use strict";
// require('./footer.css')
import React from "react";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <div>
      <hr />
      Statement Reader - {date}
      <hr />
    </div>
  );
};

export default Footer;
