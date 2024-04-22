import React, { Component } from 'react'
import TableComponent from '../component/Table'
import NavbarComponent from '../component/Navbar'
import CoursesCard from '../component/CoursesCard'

const TopRated = () => {
    return(
        <div>
            <NavbarComponent/>
            <h1>Courses</h1>
            <CoursesCard />
        </div>
    )
}

export default TopRated