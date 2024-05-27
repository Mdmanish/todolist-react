import React, { useState, useEffect } from "react";
import Header from "../Header/Header";
import axios from "axios";
import SubHeader from "../SubHeader/SubHeader";
import AddATask from "../Tasks/AddATask";
import ViewATask from "../Tasks/ViewATask";
import ToDoDetailedView from "../ToDo/ToDoDetailedView";
import Style from "./ToDoList.module.scss"

const ToDoList = () => {
    const [data, setData] = useState({})
    const [showDetailedView, setShowDetailedView] = useState(false)
    const [taskeDetailedData, setTaskDetailedData] = useState([])
    const [isNewTaskAdded, setIsNewTaskAdded] = useState(false)

    const AddATaskHandler = () => {
        console.log('AddATaskHandler')
        setIsNewTaskAdded(true)
    }

    const TaskClickedHandler = (item) => {
        setShowDetailedView(true)
        console.log('item: ', item)
        setTaskDetailedData(item)
    }

    useEffect(() => {
        axios.get('https://todolist-p857.onrender.com/', {
            headers: {
                'Authorization': 'Bearer '+localStorage.getItem('access_token')
            }
        })
        .then((response) => {
            console.log('response: ', response.data)
            setData(response.data)
        })
        .catch((error) => {
            console.log('error: ', error)
        })
    }, [isNewTaskAdded])

    return (
        <>
            <Header />
            <div className={showDetailedView ? Style.ToDoListContainer : ''}>
                <div className={showDetailedView ? Style.showDetailedView : ''}>
                    <SubHeader />
                    <AddATask AddATaskHandler={AddATaskHandler} />
                    {
                        Array.isArray(data) && data.map((item, index) => (
                            <ViewATask 
                                key={index}
                                data={item}
                                TaskClickedHandler={() => TaskClickedHandler(item)}
                            />
                        ))
                    }

                </div>
                <div>
                    {showDetailedView && (
                    <ToDoDetailedView data={taskeDetailedData} />
                )}
                </div>
            </div>
        </>
    )
};
export default ToDoList;