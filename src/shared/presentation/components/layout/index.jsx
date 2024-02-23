import React from "react";
import "./boardLayout.scss"
import Nabvar from "./navbar/index";
const BoardLayout = ({children}) => {
    return (
      <div className="content-layout">
        <Nabvar/>
        <section className="section-child">
          <div className='child-container'>{children}</div>
        </section>
      </div>
    )
}

export default BoardLayout;