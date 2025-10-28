import { useEffect } from "react";
import {useLocation} from 'react-router-dom';

const routeTitles = {
    "/" : "Home - My Portfolio",
    "/projects" : "Projects - My Portfolio",
    "/agence" :"Agence - My Portfolio",
}

export default function usePageTitle(){
    const location = useLocation();
    useEffect(() => {
        document.title = routeTitles[location.pathname] || "My Portfolio";
    },[location]);
}