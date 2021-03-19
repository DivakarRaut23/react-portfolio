import React from 'react'
import {Typography} from '@material-ui/core';
import './Profile.css';
import displayImage from '../../assets/images/displayImage.jpg';
import CustomTimeline from '../Timeline/Timeline'


const Profile = () => {
    return (
        <div className="profile container_shadow" >
            <div className="profile_name">
                <Typography className="name">Divakar Raut</Typography>
                <Typography className="title">Fullstack Engineer</Typography>
            </div>

            <figure className="profile_image">
                <img src={displayImage} alt=""/>
            </figure>
            <div className="profile_information">
                <CustomTimeline />
                <br/>
                <button>Download CV</button>
            </div>
          
        </div>
    )
}

export default Profile