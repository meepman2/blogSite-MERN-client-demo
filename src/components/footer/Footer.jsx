import React from "react";

function Footer() {
  const date = new Date().getFullYear();

  return (
    <div>
      <footer>
        <p>Copyright Varun Sachdeva @ {date}</p>
      </footer>
    </div>
  );
}

export default Footer;
