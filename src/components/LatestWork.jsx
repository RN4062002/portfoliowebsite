import React from 'react';

const projects = [
  { title: 'Claims Insurance project', desc: 'worked on claims domain project with front end(Razor) and Backend.',img:'https://www.restoremastersllc.com//wp-content/uploads/2020/01/restoremasters-insurance-process.jpg' },
  { title: 'Ecomsite Project', desc: 'work on front end(React) and backend both',img:'https://www.kindpng.com/picc/m/248-2484479_ecommerce-website-development-services-ecom-website-hd-png.png' },
  { title: 'Upcoming Project', desc: 'UI, Art direction',img:'https://tse4.mm.bing.net/th?id=OIP.3a8M7CMLDPH0GA8KtZVa1QHaEc&pid=Api&P=0&h=180' },
];

const LatestWorkSection = () => {
  return (
    <div className="flex flex-col items-center max-w-4xl w-full space-y-6 border border-gray-300 rounded-lg p-6 ">
      <h2 className="text-3xl font-bold text-black">Latest work</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">
        {projects.map((project, idx) => (
          <div className="flex flex-col space-y-2" key={idx}>
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center text-gray-500">
              <img src={project.img} alt={project.title} className="w-full h-full object-cover" />
            </div>
            <h4 className="text-lg font-semibold text-black">{project.title}</h4>
            <p className="text-gray-600">{project.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LatestWorkSection;
