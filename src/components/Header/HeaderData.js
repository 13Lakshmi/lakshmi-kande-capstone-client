import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

const HeaderData = [
    {
        title:"Attractions",
        path:"/attractions"

    },
    {
        title:"Bucketlist",
        path:"/bucketlist"

    },
    {
        title:"Logout",
        icon:<AiOutlineLogout />,
        path:"/"

    }


]

export default HeaderData;

