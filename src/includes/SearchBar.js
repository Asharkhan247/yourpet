import React from "react";
import { useState } from "react";



function ToggleDiv() {
  const [showDiv, setShowDiv] = useState(false);


  const handleClick = () => {
    setShowDiv(!showDiv); // toggle true/false
 
  };


  return (
    <div>
      <button onClick={handleClick}>Show/Hide Div</button>

      {showDiv &&  (
        <div style={{ marginTop: "10px", padding: "10px", background: "#eee" }}>
          This div is shown on click!
        </div>
      )}

 
   


      
    </div>
  );
}

export default ToggleDiv;