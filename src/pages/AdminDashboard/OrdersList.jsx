import React, { useState } from 'react';
import AdminTopbar from '../../component/AdminTopbar';
import AdminOrderPagination from '../../component/AdminOrderPages';

const OrdersList = () => {
  
  const data = [
    { 
      id: 12345, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ffffff]', // white color
      text:'Delivered',
      Color:'text-[#28a745]',
      bgColor:'bg-[#28a745]/[0.4]'
    },
    { 
      id: 12346, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ecf0f5]', // red color
      text:'Delivered',
      Color:'text-[#28a745]',
      bgColor:'bg-[#28a745]/[0.4]'
    },
    { 
      id: 12347, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ffffff]', // white color
      text:'Delivered',
      Color:'text-[#28a745]',
      bgColor:'bg-[#28a745]/[0.4]'
    },
    // Repeat the pattern for the remaining entries
    { 
      id: 12348, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ecf0f5]', // red color
      text:'Pending',
      Color:'text-[#ff5d01]',
      bgColor:'bg-[#ff5d01]/[0.4]'
    },
    { 
      id: 12349, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ffffff]', // white color
      text:'Pending',
      Color:'text-[#ff5d01]',
      bgColor:'bg-[#ff5d01]/[0.4]'
    },
    { 
      id: 12350, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ecf0f5]', // red color
      text:'Undelivered',
      Color:'text-[#f91f1f]',
      bgColor:'bg-[#990404]/[0.4]'
    },
    { 
      id: 12351, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ffffff]', // white color  
      text:'Undelivered',
      Color:'text-[#f91f1f]',
      bgColor:'bg-[#990404]/[0.4]'
    },
    { 
      id: 12352, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ecf0f5]', // red color
      text:'Cancelled',
      Color:'text-[#990404]',
      bgColor:'bg-[#990404]/[0.4]'
    },
    { 
      id: 12353, 
      Customer: 'Ebiye Ekong', 
      OrderDate: '01/01/2024', 
      DeliveryDate: '05/01/2024',
      Amount: '₦23,600',
      initialColor: 'bg-[#ffffff]', // white color
      text:'Cancelled',
      Color:'text-[#990404]',
      bgColor:'bg-[#990404]/[0.4]'
    }
  ];
  
  

  

  return (
    <div>
      <AdminTopbar />
      <div className="bg-gray-200 p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center border-b border-adarkgrey justify-between h-12 lg:h-20">
            <div>
              <p className="lg:text-[2rem] text-[1.1rem]  font-semibold">Orders</p>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="icon-[ep--search] text-darkgrey pointer-events-none w-5 h-5 lg:w-9 lg:h-9 relative left-10"></span>
              <input
                type="text"
                placeholder="Search"
                className="bg-white w-32 md:w-full text-black lg:rounded-lg rounded-md  pl-9 pr-4 py-1 lg:py-3 border border-darkgrey focus:outline-none focus:ring focus:border-amidnight"
              />
              <div className="flex gap-x-2 lg:px-6 px-3 lg:py-3 py-1 lg:rounded-lg mb-1 rounded-md text-awhite bg-amidnight items-center">
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem]">Edit</span>
                <span className="icon-[uil--edit] lg:w-7 lg:h-7 h-5 w-5"></span>
              </div>
            </div>
          </div>
          {/* Body and footer divisions */}
          <div className="py-4">
            {/* Body content */}
            <div className="overflow-x-auto border border-[#adadad] rounded-md" style={{ scrollbarWidth: 'none' }}>
              <table className="table-fixed lg:w-[65rem] ">
                <thead>
                  <tr className="bg-[#ecf0f5] tlg:text-[1.3rem] text-[1.1rem] border-b border-[#adadad]">
                    <th className="px-4 py-3 flex items-center gap-x-1">
                      <span className="icon-[fluent--checkmark-square-20-regular] lg:w-12 lg:h-12 w-10 h-10 text-amidnight"></span> Order ID
                    </th>
                    <th className="px-4 py-2">Customer</th>
                    <th className="px-4 py-2">Order Date</th>
                    <th className="px-4 py-2">Delivery Date<br /> (Launder)</th>
                    <th className="px-4 py-2">Amount <br /> (Iron)</th>
                    <th className="px-4 py-2">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr
                      key={row.id}
                      className={`lg:text-[1.1rem] text-[1rem] ${
                        index !== data.length - 1 ? 'border-b border-[#adadad]' : ''
                      } ${row.initialColor}`}
                    >
                      <td className="px-4 lg:py-6 py-12 text-center flex items-center gap-x-1">
                        <span className="icon-[fluent--checkmark-square-20-regular] w-12 h-12 text-amidnight"></span>
                        {row.id}
                      </td>
                      <td className="px-4 py-2 text-center">{row.Customer}</td>
                      <td className="px-4 py-2 text-center">{row.OrderDate}</td>
                      <td className="px-4 py-2 text-center">{row.DeliveryDate}</td>
                      <td className="px-4 py-2 text-center">{row.Amount}</td>
                      <td className="px-4 py-2 text-center ">
                      <div className={`text-[1.1rem] w-[10rem] mx-auto h-[3rem] flex rounded-md items-center justify-center ${row.Color} ${row.bgColor} `}>
                           {row.text}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-2">
            {/* Footer content */}
            
            <AdminOrderPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrdersList;
