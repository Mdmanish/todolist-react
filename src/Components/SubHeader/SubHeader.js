import React from "react";
import Style from "./SubHeader.module.scss";

const SubHeader = () => {
    return (
        <div className={Style.subHeaderContainer}>
            <div className={Style.subHeader}>
                <div className={Style.subHeaderLeft}>
                    <div>
                        <h3>My Day</h3>
                    </div>
                    <div>
                        <h3>...</h3>
                    </div>
                    <div>
                        <p>▢    Grid</p>
                    </div>
                    <div>
                        <p>▢    List</p>
                    </div>
                </div>
                <div className={Style.subHeaderRight}>
                    <p>⇅    Sort</p>
                    <p>▢    Group</p>
                    <p>💡   Suggestion</p>
                </div>
            </div>
            <span className={Style.SubHeaderDate}>Thursday, May 21</span>
        </div>
    )
}

export default SubHeader;
