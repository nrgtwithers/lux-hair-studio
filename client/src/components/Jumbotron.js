import React from "react";

function Jumbotron({ children }) {
    return (
      <div
        style={{ height: 500, backgroundColor:'grey', paddingTop: 30 }}
        className="jumbotron"
      ><div className="jum-container">
        {children}
        </div>
      </div>
    );
  }

export default Jumbotron;