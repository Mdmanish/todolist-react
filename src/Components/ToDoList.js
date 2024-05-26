import React, { useState, useEffect } from "react";
import Header from "./Header/Header";
import axios from "axios";
import SubHeader from "./SubHeader/SubHeader";
import AddATask from "./Tasks/AddATask";
import ViewATask from "./Tasks/ViewATask";

const ToDoList = () => {
    const [data, setData] = useState({})
    const token = {'Authorization': 'Bearer '+localStorage.getItem('access_token')}
    console.log('token: ', token)

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
    }, [])

    return (
        <>
            <Header />

            <SubHeader />

            <AddATask />
            {
                Array.isArray(data) && data.map((item, index) => (
                    <ViewATask key={index} data={item} />
                ))
            }
            <ViewATask />
            <ViewATask />
            <ViewATask />

        </>
    )
};
export default ToDoList;