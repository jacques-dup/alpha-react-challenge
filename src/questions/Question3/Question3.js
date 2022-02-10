import React, { useState } from "react";
import { api } from "../../infrastructure";
import './Question3.css'

const CourseCard = ({ course }) => {
    return (
        <div>
            <h2>{course.name}</h2>
            <div>
                <div id="host">Host: {course.hostId}</div>
                <div id="message">{course.adminMessage}</div>
                <div id="participants">
                Participants:
                {/* Implement Participants mapping here */}
                
                </div>
            </div>
        </div>
    );
};

export const Question3 = () => {

    const [data, setData] = useState(api.getCourses());
    console.log('data', data)

    return (
        <>
            <h1>Question 3</h1>

            {/* Implement mapping for course cards using data here */}
            
        </>
    );
};

export default Question3;
