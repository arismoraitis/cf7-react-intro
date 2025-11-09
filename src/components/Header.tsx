import ScopeLogo from "./ScopeLogo.tsx";



const Header =  () => {

    return (
        <>
            <header className="bg-gray-200 w-full fixed">
<div className="container mx-auto px-4 flex items-center justify-between">
    <ScopeLogo />
    <a className="text-black hover:underline hover:underline-offset-4" href="/">Home</a>

</div>

            </header>
        </>

    )


}

export default Header;