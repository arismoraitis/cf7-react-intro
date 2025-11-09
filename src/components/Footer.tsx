const Footer = () => {

    const CurrentYear = new Date().getFullYear();


    return (

      <>


      <footer className="bg-gray-700">
          <div className="text-white text-center py-4">
              © Netcompany Group {CurrentYear} A/S and/or its subsidiaries          </div>
      </footer>


      </>


    )


}

export default Footer;
