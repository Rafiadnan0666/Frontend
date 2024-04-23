import React from "react";
import DetailCourse from "../component/DetailCourse";
import NavbarComponent from "./../component/Navbar"
import FooterComponent from './../component/Footer'

const DetailCoursePages = () => {
    return(
        <div>
            <NavbarComponent/>
            <DetailCourse/>
            <FooterComponent/>
        </div>
    )
}

export  default DetailCoursePages; 