import React from 'react';

const services = [
  { title: 'ASP .Net', color: 'bg-pink-200', corner: 'top-0 left-0', dot: 'top-2 left-2' ,description:'I use ASP .NET to build secure, scalable, and high-performance backend systems. From MVC architecture to API development, I create clean and maintainable server-side applications.',img:'https://img.icons8.com/color/48/net-framework.png'},
  { title: 'SQL Server', color: 'bg-red-400', corner: 'top-0 right-0', dot: 'top-2 right-2',description:'I design efficient database structures and write optimized queries and stored procedures to ensure fast data access and robust backend support for applications.',img:'https://img.icons8.com/fluency/48/sql.png' },
  { title: 'React', color: 'bg-teal-500', corner: 'bottom-0 left-0', dot: 'bottom-2 left-2',description:'With React, I build responsive, component-driven UIs that deliver fast and engaging user experiences. I focus on creating reusable code and clean front-end architecture.',img:'https://img.icons8.com/color/48/react-native.png' },
  { title: 'Web Apis', color: 'bg-yellow-200', corner: 'bottom-0 right-0', dot: 'bottom-2 right-2',description:'I develop RESTful Web APIs that connect frontends with backends seamlessly, ensuring smooth data flow and integration across platforms.',img:'https://img.icons8.com/nolan/64/api-settings.png' },
];

const ServicesSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full border border-gray-300 rounded-lg p-6 ">
      {services.map((service, idx) => (
        <div className="flex flex-col space-y-4" key={idx}>
          <div className="flex justify-center">
            <img src={service.img}  className=" " />
          </div>
          <h3 className="text-xl font-bold text-black">{service.title}</h3>
          <p className="text-gray-600">
           {service.description}
          </p>
        </div>
      ))}
    </div>
  );
};

export default ServicesSection;
