// import React, { useState } from "react";
// import "./Article-home.css";
// import useCollapse from "react-collapsed";
// import { Articleforhome } from "./Dataset";

// export default function () {
//   const [isExpanded, setExpanded] = useState(false);
//   const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

//   return (
//     <>
//       <div className="arti-home-top">
//         <h2>
//           "Checkout"
//           <a href="https://instagram.com/nitsmun" target="blank">
//             @nitsmun
//           </a>
//           "for all our articles"
//         </h2>
//       </div>

//       <div className="art-home-sec">
//         {Articleforhome.map((item, index) => {
//           return (
//             <div className="arti-home">
//               <img src={item.img} alt="" />
//               <div className="art-home-body">
//                 <h2>{item.heading}</h2>
//                 <p>{item.para}</p>
//                 <p {...getCollapseProps()}>{item.show}</p>
//                 <button
//                   {...getToggleProps({
//                     onClick: () => setExpanded((prevExpanded) => !prevExpanded),
//                   })}
//                 >
//                   {isExpanded ? "Read Less" : "Read More"}
//                 </button>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//     </>
//   );
// }

import React, { useState } from "react";
import "./Article-home.css";
import { Articleforhome } from "./Dataset";
import useCollapse from "react-collapsed";

export default function () {
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <div className="art-home-title">
        <h1 className="apply-home-h1">
          CHECK OUT{" "}
          <a href="https://instagram.com/nitsmun" target="blank">
            @nitsmun
          </a>{" "}
          FOR ALL OUR ARTICLES
        </h1>
      </div>

      <div className="tea0">
        {Articleforhome.map((item) => {
          return (
            <div key={item.id} className="team-section">
              <img src={item.img} alt={item.alt2} />
              <div className="team-section-body">
                <h2>{item.heading}</h2>
                <p>{item.para}</p>
                <p {...getCollapseProps()}>{item.show}</p>
                <button
                  {...getToggleProps({
                    onClick: () => setExpanded((prevExpanded) => !prevExpanded),
                  })}
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
