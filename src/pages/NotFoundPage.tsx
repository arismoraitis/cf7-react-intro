import {useEffect} from "react";
import {Link} from "react-router";

const NotFoundPage = () => {

    useEffect(()=> {

        document.title = "404: Not found";
    })


    return (


        <>
            <div className="text-center py-36 space-y-6">
            <h1 className="text-9xl font-bold text-scope-red">404</h1>
            <p className="text-4xl text-scope-dark-gray">Page not found</p>
            <p className="text-lg text-scope-dark-gray">The page you are looking for does not exist.</p>
              <div className="py-4">
                <Link to={"/"}
              className="bg-scope-red text-white px-4 py-2 rounded"
              >
                  Go back to Home</Link>
              </div>
            </div>
        </>
    )
}


export default NotFoundPage;