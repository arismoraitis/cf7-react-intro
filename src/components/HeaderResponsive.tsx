import {useState} from "react";
import ScopeLogo from "./ScopeLogo.tsx";
import {Link} from "react-router";
import {Menu, X} from "lucide-react";


const HeaderResponsive =  () => {

    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            <header className="bg-gray-200 w-full fixed">
<div className="container mx-auto px-4 flex items-center justify-between">
    <ScopeLogo />

    <button
        className="text-scope-dark-gray md:hidden"
        onClick={() => setMenuOpen(!menuOpen)}
    >
        {menuOpen ? <X size={36}/> : <Menu size={36}/>}
    </button>
    <nav className={`${
        menuOpen ? "block" : "hidden"
        } md:flex gap-4 bg-gray-200 text-scope-dark-gray absolute top-24 left-0 w-full md:w-auto md:static p-4 md:p-0`}>


    <Link to={"/"} className="block md:inline hover:underline hover:underline-offset-4" onClick={() => setMenuOpen(false)}>Home</Link>
    <Link to={"/examples/name-changer"} className="block md:inline hover:underline hover:underline-offset-4" onClick={() => setMenuOpen(false)}>Name Changer</Link>
    <Link to={"/examples/online-status"} className="block md:inline hover:underline hover:underline-offset-4" onClick={() => setMenuOpen(false)}>Online Status</Link>
    </nav>
</div>

            </header>
        </>

    )


}

export default HeaderResponsive;