import React from "react";
import Loader from "react-loader-spinner";

export default function ShowLoader(){
    return(
        <div className="ShowLoader text-center">
        <Loader type="BallTriangle" color="#ff7e1d" height={200} width={200} />
        </div>
    )
}