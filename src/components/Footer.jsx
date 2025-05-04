const Footer = () => {
    return(
        <div>
             {/* Section: Footer */}
          <footer className="flex flex-col items-center max-w-4xl w-full border border-gray-300 rounded-lg p-6">
            {/* <h3 className="text-xl font-bold text-gray mb-4">Connect with Me</h3> */}
            
            <div className="flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-10">
              <a
                href="https://www.linkedin.com/in/rohan-nagargoje-771798218/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-300 hover:underline flex items-center space-x-2"
              >
                <img src="https://img.icons8.com/color/35/linkedin.png" />
                <span>LinkedIn</span>
              </a>
              <a
                href="roahn.nagargoje1023@gmail.com"
                className="text-blue-300 hover:underline flex items-center space-x-2"
              >
                <img src="https://img.icons8.com/color/35/gmail.png" />
                <span>Email </span>
              </a>
              <a
                href="tel:+9075392893"
                className="text-blue-300 hover:underline flex items-center space-x-2"
              >
                <img src="https://img.icons8.com/color/35/phone.png" />
                9075392893
              </a>
            </div>
            
          </footer>
        </div>
    )
}

export default Footer;