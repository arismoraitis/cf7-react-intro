
// Διαφορά <Link> και <Navlink>
// Όταν βρισκόμαστε στη σελίδα που έχουμε κάνει κλικ η Navlink προσθέτει αυτόματα μία κλάση που λέγεται active και ένα aria-label με name page

import {NavLink} from "react-router";


const ExamplesSection = () => {

    return (


        <>

<div className="bg-gray-200 py-24">

    <ul className="container mx-auto flex justify-center space-x-4">

        <li><NavLink
            to="/examples/name-changer"
             className={({isActive}) => isActive ? "text-scope-red underline underline-offset-6" : "text-scope-dark-gray"}

        >
            Name Changer</NavLink></li>
        <li> <NavLink
            to="/examples/online-status"
            className={({isActive}) => isActive ? "text-scope-red underline underline-offset-6" : "text-scope-dark-gray"}
        >
            Online Status</NavLink></li>
        <li> <NavLink
            to="/examples/auto-redirect-advanced"
            className={({isActive}) => isActive ? "text-scope-red underline underline-offset-6" : "text-scope-dark-gray"}
        >
            Auto Redirect</NavLink></li>
    </ul>
</div>

        </>
    )
}


export default ExamplesSection;