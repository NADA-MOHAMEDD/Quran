// import React, { useEffect, useState } from 'react';
// import Card from '../components/Card';
// const Services = () => {
//     const [data, setData] = useState([]); 

//     useEffect(() => {
//         const fetchData = async () => {
//             try {
//                 const response = await fetch('');
//                 const result = await response.json();
//                 setData(result); 
//             } catch (error) {
//                 console.error('Error fetching data:', error);
//             }
//         };

//         fetchData();
//     }, []);

//     return (
//         <>
//             <div className="flex flex-col items-center px-[90px] py-2">
//                 <h1 className="text-3xl font-bold mb-6 ">الخدمات المقدمة</h1>

//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-9 w-full"> 
//                     {data.map((item, index) => (
//                         <div key={index} className="col-span-1">
//                             <Card
//                                 icon={
//                                     item.icon     
//                                 }
//                                 heading={item.heading}
//                                 paragraph={item.paragraph}
//                             />
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </>
//     );
// }

// export default Services;



