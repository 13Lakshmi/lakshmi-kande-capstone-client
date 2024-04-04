import React from "react";
import { AiOutlineLogout } from "react-icons/ai";

const HeaderData = [
    {
        title:"Attractions",
        path:"/attractions"

    },
    {
        title:"Add Attractions",
        path:"/AddAttraction"

    },
    {
        title:"Bucketlist",
        path:"/bucketlist"

    },
    {
        title:"Logout",
        icon:<AiOutlineLogout />,
        path:"/login"

    }


]

export default HeaderData;

