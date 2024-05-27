import React, { useState } from "react";
import Style from "./AddATask.module.scss"
import calanderIcon from "../../assets/calander-icon.png";
import notificationIcon from "../../assets/notification-icon.png"
import repeatIcon from "../../assets/repeat-icon.png"
import axios from "axios";

const AddATask = (props) => {
    const [checkbox, setCheckbox] = useState(false);
    const [isAddTaskClicked, setIsAddTaskClicked] = useState(false);
    const [task, setTask] = useState('');
    const [initialFormData, setInitialFormData] = useState({
        title: '',
        // duedate: '',
        // remind: '',
        // repeat: '',
    })
    const [formData, setFormData] = useState(initialFormData)

    const SubmitHandler = () => {
        // const formData = formData
        axios.post("https://todolist-p857.onrender.com/", formData,{
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('access_token')
            }
        })
        .then((response) => {
            console.log(response)
            setFormData(initialFormData)
            props.AddATaskHandler()
        })
        .catch((error) => {
            console.log(error)
        })
    }
    return (
        <div className={Style.AddATaskContainer}>
            <div className={Style.AddATask}>
                <input
                className={Style.checkbox}
                type="checkbox"
                name="checkbox"
                checked={checkbox}
                onChange={() => {setCheckbox(!checkbox)}}
                />
                <input
                className={Style.InputText}
                type="text"
                placeholder="Add a task"
                name="title"
                value={formData.title}
                onChange={(e) => {setFormData({...formData, [e.target.name]: e.target.value})}}
                onClick={() => {setIsAddTaskClicked(true)}}
                />
            </div>
            {
                isAddTaskClicked && (
                    <div className={Style.AddATaskButtom}>
                        <div className={Style.left}>
                            <img src={calanderIcon} alt="duedate" />
                            <img src={notificationIcon} alt="remind" />
                            <img src={repeatIcon} alt="repeat" />
                        </div>
                        <div>
                            <button type="submit" onClick={SubmitHandler}>Add</button>
                        </div>
                    </div>
                )
            }
        </div>
    )
};
export default AddATask
