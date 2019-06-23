import React from 'react';
import useGlobalHook from '../../hooks/useGlobalHook';
import * as actions from '../services/ChapterService'
import {status} from '../constants/Chapter';


const ProfileState = { // each of these define a state that can be pulled
    Profile: { // defines a chapter DTO
        schoolName: "",
        firstName: "",
        lastName: "", // URIs to assests folder
        gradYear: "", // URIs to assests folder
        inspiration: "",
    },
    Status: status.init, // defines if the chapter is loaded
}

const useProfile = useGlobalHook(React, ProfileState, actions);

export default useProfile;