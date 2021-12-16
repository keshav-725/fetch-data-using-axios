import React, { useState, useEffect } from "react";
import axios from "axios";
import "./profile.css"
import {AiOutlineArrowRight} from "react-icons/ai"
import profile_img from "../image/men_3.jpg"
import logo from "../image/logo.jpg"

const Profile = () => {
    function alertButton(){
        alert('A Button was Clicked')
    }
    const [userData, setUserData] = useState('')
    useEffect(() => {
        getUserData()
    }, [])

    const url = "https://mocki.io/v1/bb11aecd-ba61-44b9-9e2c-beabc442d818"
    const getUserData = () => {
        axios.get(url)
            .then((res) => {
                const resData = res.data;
                setUserData(resData)
            })
            .catch((error) => console.log(error))
    }
    const { dashboard_stats, upcoming_sessions, job_postings } = userData;
    if (!userData) {
        return (
            <h2>No data Found</h2>
        )
    } else {
        return (
            <div className="Footer">
                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div className="row dashboard">
                                <div className="col">
                                    <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                        <p>Overview</p>
                                        <p className="bgBlue">Dashboard</p>
                                    </div>
                                    <div className="row">
                                        <div className="col dashbord-bg mr-3 mb-3">
                                            <p className="text-start">Profile Views</p><div>{dashboard_stats.profile_views}</div>
                                        </div>
                                        <div className="col dashbord-bg ml-5 mb-3">
                                            <p className="text-start">Mentorship session</p><div>{dashboard_stats.mentorship_sessions}</div>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col dashbord-bg mr-3">
                                            <p className="text-start">Jobs Applied</p><div>{dashboard_stats.jobs_applied}</div>
                                        </div>
                                        <div className="col dashbord-bg ml-5">
                                            <p className="text-start">Skill Verified</p><div>{dashboard_stats.skills_verified}</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row session">
                                <div className="col">
                                    <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                        <p>Upcoming Sessions</p>
                                        <button onClick={alertButton} className="bgBlue">View All</button>
                                    </div>
                                    {
                                        upcoming_sessions.map((user) => {
                                            return (
                                                <div className="row mt-4" key={user.mentor_name}>
                                                    <div className="col">
                                                        <img src={profile_img} width="30px" height="30px"/>
                                                    </div>
                                                    <div className="col">{user.mentor_name}</div>
                                                    <div className="col">
                                                        <div>{user.timings}</div>
                                                        <div>{user.date}</div>
                                                    </div>
                                                    <div className="col"><button className={`${user.session_type}`}>{user.session_type}</button></div>
                                                    <div className="col"><AiOutlineArrowRight onClick={alertButton}/></div>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className="col postings ml-5">
                            <div className="d-flex" style={{ justifyContent: "space-between" }}>
                                <p>New Job Postings</p>
                                <button onClick={alertButton} className="bgBlue">View All</button>
                            </div>
                            {
                                job_postings.map((job) => {
                                    return (
                                        <div className="row mt-4">
                                            <div className="col d-flex" style={{alignItems:"center",justifyContent:"center"}}>
                                                <img src={logo} width="50px" height="50px"/>
                                            </div>
                                            <div className="col text-start">
                                                <div>{job.role}</div>
                                                <div>{job.organization_name}</div>
                                                <div>{job.location}</div>
                                            </div>
                                            <div className="col">{job.date_posted}</div>
                                            <div className="col"><AiOutlineArrowRight onClick={alertButton}/></div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Profile
