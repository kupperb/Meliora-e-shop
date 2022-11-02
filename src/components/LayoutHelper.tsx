import React from "react";
import Navbar from "./Navbar";

type LayoutHelperProps = {
    children: React.ReactNode,
    hasLogo: boolean,
};

const LayoutHelper:React.FC<LayoutHelperProps> =  ({children,hasLogo}) => {
    return <><Navbar hasLogo={hasLogo}/>{children}</>
};

export default LayoutHelper;