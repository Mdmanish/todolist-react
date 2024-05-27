import React, { useState,  useEffect } from "react";
import Style from "./ToDoDetailedView.module.scss";

const ToDoDetailedView = (props) => {
    const [checkbox, setCheckbox] = useState(props?.data?.completed);

    useEffect (() => {
        setCheckbox(props?.data?.completed)
    }, [props])
    
    return (
        <div className={Style.ToDoDetailedViewContainer}>
            <div className={Style.title}>
                <div>
                    <input
                        type="checkbox"
                        name="checkbox"
                        checked={checkbox}
                        onChange={() => {setCheckbox(!checkbox)}}
                    />
                    <input
                        type="text"
                        name="title"
                        placeholder="Title"
                        value={props?.data?.title}
                        onChange={(e) => {}}
                    />
                </div>
                <span>star</span>
            </div>
            <div className={Style.addStep}>
                <input
                    type="checkbox"
                    name="checkbox"
                    checked={false}
                    onChange={() => {}}
                />
                <input
                    type="text"
                    name="addstep"
                    placeholder="Add step"
                    value={""}
                    onChange={(e) => {}}
                />
            </div>
            <p>⇅    Add to My Day</p>
            <p>⇅    {props?.data?.remind??"Remind me"}</p>
            <p>⇅    {props?.data?.duedate??"Due date"}</p>
            <p>⇅    {props?.data?.repeat??"Repeat"}</p>
            <p>⇅
                <input 
                type="text"
                placeholder="Pick a category"
                name="category"
                choices={["O Green category", "O Orange category"]}
                value={""}
                onChange={(e) => {}}
            />
            </p>
            <p>
                <input
                    type="file"
                    name="file"
                    onChange={(e) => {}}
                    placeholder="Add a file"
                    value={""}
                />
            </p>
            <input
                type="text"
                name="addanote"
                placeholder="Add a note"
                value={props?.data?.notes??""}
                onChange={(e) => {}}
            />
        </div>
    )
};

export default ToDoDetailedView;
