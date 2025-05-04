import { useState } from 'react';
import Contact from './Contact';
import img from '../assets/logo.png'

const Home = () => {
  const [showContact, setShowContact] = useState(false);
  
    
  return (
    <>
  <div className="flex flex-col md:flex-row items-center max-w-4xl w-full border border-gray-300 rounded-lg p-6 ">
  <div className="flex-1 space-y-4">
    <h3 className="text-lg font-semibold text-gray-800">Rohan Nagargoje</h3>
    <h1 className="text-5xl font-bold text-black leading-tight">Software<br />Engineer</h1>
    <p className="text-gray-600">
    "With 1.5 years of hands-on experience building robust and scalable web applications.
     I specialize in React, ASP.NET, and SQL Server, 
     having delivered impactful solutions in both the insurance and e-commerce domains.
      My focus is on writing clean code, creating seamless user experiences, and driving real-world results through technology."
    </p>
    <button className="bg-black text-white px-6 py-2 rounded hover:bg-gray-800 transition"
     onClick={() => setShowContact(!showContact)}
    >
      Contact
    </button>
  </div>

  <div className="relative flex-1 flex justify-center items-center mt-6 md:mt-0">
    <div className="relative w-80 h-80 bg-gray-200 rounded-t-full rounded-b-md overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-center text-gray-500 w-100">
        <img src={img}/>
      </div>
    </div>
    {/* <div className="absolute top-0 right-0 w-20 h-20 bg-red-400 rounded-tl-full"></div>
    <div className="absolute bottom-0 left-0 w-24 h-24 bg-teal-500 rounded-br-full"></div>
    <div className="absolute top-4 left-4 w-2 h-2 bg-black rounded-full"></div> */}
    {/* <div className="absolute bottom-4 right-4 w-2 h-2 bg-black rounded-full"></div> */}
  </div>
</div>

      <div className='mt-4'>
    {showContact && (
        <Contact onClose={() => setShowContact(false)} />
      )}
      </div>
    </>
  );
}
  export default Home;