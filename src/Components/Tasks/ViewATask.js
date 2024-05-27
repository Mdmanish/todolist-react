import React, { useState } from "react";
import Style from "./ViewATask.module.scss"

const ViewATask = (props) => {
    const [checked, setChecked] = useState(props?.data?.completed);

    return (
        <div className={Style.ViewATask} onClick={() => props?.TaskClickedHandler()}>
            <div className={Style.main}>
                <input
                    type="checkbox"
                    name="checkbox"
                    checked={checked}
                    onChange={() => {setChecked(!checked)}}
                />
                <div className={Style.innerMain}>
                    <p>{props?.data?.title}</p>
                    <div>
                        <span>0 of 1</span>
                        <span><img src={''} />Due Mon, May 27</span>
                        <span><img src={''} />Tomorrow</span>
                        <span><img src={''} />File attached</span>
                        <span>O Green category</span>
                        <span>O Orange category</span>
                    </div>
                </div>
            </div>
            <div className={Style.star}>
                <p>star</p>
            </div>
        </div>
    )
}

export default ViewATask;