import React, { useState } from "react";
import "./Coinstyle.css"; // Corrected import statement for CSS file

const Coininfo = ({ heading, desc }) => {
  // Corrected props destructuring: headin -> heading
  const shortDesc =
    desc.slice(0, 300) + "<p style='color:var(--white)'><br/> Read More...</p>";
  const longDesc =
    desc +
    "<p style='color:var(--white)' font-size:1rem> <br/>Read less...</p>";

  const [flag, setFlag] = useState(false);
  return (
    <div className="grey-wrapping">
      <h2 className="coin-info-heading">{heading}</h2>
      {/* Check if desc length is greater than 200 */}
      {desc.length > 200 ? (
        <p
          onClick={() => setFlag(!flag)}
          className="coin-info-desc"
          dangerouslySetInnerHTML={{ __html: flag ? longDesc : shortDesc }}
        ></p>
      ) : (
        <p dangerouslySetInnerHTML={{ __html: desc }} />
      )}
    </div>
  );
};

export default Coininfo;
