import {useEffect} from "react";
import AutoRedirect from "../components/AutoRedirect.tsx";

const HomePage = () => {

useEffect(() => {
    document.title = "Auto Redirect";
}, [])

    return (

        <>

<AutoRedirect/>
        </>
    )
}


export default HomePage;