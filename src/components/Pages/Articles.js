import React, { useState } from "react";
import "./Articles.css";
import useCollapse from "react-collapsed";
import { Articleforhome } from "../Dataset";
import { TabTitle } from "../Utils/Genfn";
import "./Articles.css";
export default function () {
  TabTitle("NITSMUN >> Articles");
  const [isExpanded, setExpanded] = useState(false);
  const { getCollapseProps, getToggleProps } = useCollapse({ isExpanded });

  return (
    <>
      <div className="article-main1">
        {Articleforhome.map((item, index) => {
          return (
            <div className="article-head">
              <div className="art-head-img">
                <img src={item.img} alt={item.alt2} />
              </div>
              <div className="art-head-content">
                <div>
                  <button
                    {...getToggleProps({
                      onClick: () =>
                        setExpanded((prevExpanded) => !prevExpanded),
                    })}
                  >
                    {isExpanded ? "Read Less" : "Read More"}
                  </button>
                  <section {...getCollapseProps()}>{item.show}</section>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}
