import React, {useLayoutEffect} from "react";
import CourseRowComponent from "./CourseRowComponent";

// {instructor, term} is one argument
// function CourseListComponent({instructor, term}) {
//     return(
//         <h1>Course List (For {instructor}) {term}</h1>
//
//     )
// }

const courses = [
    {
        _id: "123",
        title: "CS5610",
        owner: "me",
        lastOpened: "yesterday"
    },
    {
        _id: "124",
        title: "CS4550",
        owner: "me",
        lastOpened: "yesterday"
    },
    {
        _id: "234",
        title: "CS3200",
        owner: "me",
        lastOpened: "yesterday"
    }
]

const CourseListComponent = ({instructor, term}) =>
    <div>
        <h1>Course List (For {instructor}) {term}</h1>
        <table className="table">
            {
                courses.map((item, index) =>
                    <CourseRowComponent item = {item}/>
                )
            }
        </table>
    </div>

export default CourseListComponent