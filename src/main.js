import React from "react";
import { Link, Outlet } from "react-router-dom";



export default function Main(){
      return(
        <>
        <div style={{display:"flex",justifyContent:"space-evenly",alignItems:"center"}}>
        <Link to={'addc'}>Add</Link>
        <Link to={'contactlist'}>Contactlist</Link>
        </div>
        
        <div>
            <Outlet/>
        </div>
        </>
      )
}