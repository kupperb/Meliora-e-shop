import React from "react";
import Navbar from "./Navbar";

type LayotHelperProps = {
    children: React.ReactNode,
    hasLogo: boolean,
}


const LayotHelper:React.FC<LayotHelperProps> =  ({children,hasLogo}) => {
    return <><Navbar hasLogo={hasLogo}/>{children}</>
}

export default LayotHelper;