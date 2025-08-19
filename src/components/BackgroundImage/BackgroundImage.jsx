import React from "react";

const BackgroundImage = ({ url, children }) => {
  return (
    <main
      style={{
        backgroundImage: `url(${url})`,
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        height: "80vh",
        width: "100%",
        // display: "flex",
        // justifyContent: "center",
        // alignItems: "center",
        // color: "#fff",
        // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
        
      }}
    >
      {children}
    </main>
  );
};

export default BackgroundImage;
