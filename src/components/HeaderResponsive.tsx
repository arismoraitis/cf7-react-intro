import ScopeLogo from "./ScopeLogo.tsx";
import {Link} from "react-router";
import {useState} from "react";
import {Menu} from "lucide-react";

const [menuOpen, setMenuOpen] = useState(false);


const HeaderResponsive =  () => {

    return (
        <>
            <header className="bg-gray-200 w-full fixed">
<div className="container mx-auto px-4 flex items-center justify-between">
    <ScopeLogo />

    <button
        className=""
        onClick={() => setMenuOpen(!menuOpen)}
    >
    <Menu/>
    </button>
    <nav className="flex gap-4">
    <Link to={"/"} className="text-black hover:underline hover:underline-offset-4">Home</Link>
    <Link to={"/examples/name-changer"} className="text-black hover:underline hover:underline-offset-4">Name Changer</Link>
    <Link to={"/examples/online-status"} className="text-black hover:underline hover:underline-offset-4">Online Status</Link>
    </nav>
</div>

            </header>
        </>

    )


}

export default HeaderResponsive;