import React, { useState } from 'react';
import AdminTopbar from '../../component/AdminTopbar';
import ToggleSwitch from '../../component/Toggle';
import AdminCustomerPagination from '../../component/AdminCustomerPages';
const CustomerList = () => {
  const [isChecked, setIsChecked] = useState(true);
  const [data, setData] = useState([
    { 
      id: 12345, 
      customer: 'Ebiye Ekong', 
      phoneNumber: '0812345678', 
      email: 'example@gmail.com', 
      address: '2, Sunnyside street sunnyvale lekki', 
      initialColor: 'bg-[#ffffff]' // white color
    },
    { 
      id: 12346, 
      customer: 'Ebiye Ekong', 
      phoneNumber: '0812345678', 
      email: 'example@gmail.com', 
      address: '2, Sunnyside street sunnyvale lekki', 
      initialColor: 'bg-[#ecf0f5]' // red color
    },
    { 
      id: 12347, 
      customer: 'Ebiye Ekong', 
      phoneNumber: '0812345678', 
      email: 'example@gmail.com', 
      address: '2, Sunnyside street sunnyvale lekki', 
      initialColor: 'bg-[#ffffff]' // white color
    },
    { 
      id: 12348, 
      customer: 'Ebiye Ekong', 
      phoneNumber: '0812345678', 
      email: 'example@gmail.com', 
      address: '2, Sunnyside street sunnyvale lekki', 
      initialColor: 'bg-[#ecf0f5]' // red color
    },
    { 
      id: 12349, 
      customer: 'Ebiye Ekong', 
      phoneNumber: '0812345678', 
      email: 'example@gmail.com', 
      address: '2, Sunnyside street sunnyvale lekki', 
      initialColor: 'bg-[#ffffff]' // white color
    },
    { 
      id: 12350, 
      customer: 'Ebiye Ekong', 
      phoneNumber: '0812345678', 
      email: 'example@gmail.com', 
      address: '2, Sunnyside street sunnyvale lekki', 
      initialColor: 'bg-[#ecf0f5]' // red color
    },
    { 
      id: 12351, 
      customer: 'Ebiye Ekong', 
      phoneNumber: '0812345678', 
      email: 'example@gmail.com', 
      address: '2, Sunnyside street sunnyvale lekki', 
      initialColor: 'bg-[#ffffff]' // white color
    },
    { 
      id: 12352, 
      customer: 'Ebiye Ekong', 
      phoneNumber: '0812345678', 
      email: 'example@gmail.com', 
      address: '2, Sunnyside street sunnyvale lekki', 
      initialColor: 'bg-[#ecf0f5]' // red color
    },
    { 
      id: 12353, 
      customer: 'Ebiye Ekong', 
      phoneNumber: '0812345678', 
      email: 'example@gmail.com', 
      address: '2, Sunnyside street sunnyvale lekki', 
      initialColor: 'bg-[#ffffff]' // white color
    }
  ]);
  const toggleColor = (index) => {
  
    setIsChecked(!isChecked);
    setData(prevData => {
      const newData = [...prevData];
      const currentColor = newData[index].initialColor;
  
      // Toggle between colors based on isChecked state
      if (isChecked) {
        if (currentColor === 'bg-[#ffffff]') {
          newData[index].initialColor = 'bg-[#adadad]';
        } else if (currentColor === 'bg-[#ecf0f5]') {
          newData[index].initialColor = 'bg-[#b8c7db]';
        }
      } else {
        if (currentColor === 'bg-[#adadad]') {
          newData[index].initialColor = 'bg-[#ffffff]';
        } else if (currentColor === 'bg-[#b8c7db]') {
          newData[index].initialColor = 'bg-[#ecf0f5]';
        }
      }
  
      return newData;
    });
  };
  

  return (
    <div>
      <AdminTopbar />
      <div className="bg-gray-200 p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex items-center border-b border-adarkgrey justify-between h-20">
            <div>
              <p className="text-[2rem] font-semibold">Customers</p>
            </div>
            <div className="flex items-center gap-x-2">
              <span className="icon-[ep--search] text-darkgrey pointer-events-none w-9 h-9 relative left-10"></span>
              <input
                type="text"
                placeholder="Search"
                className="bg-white w-32 md:w-full text-black rounded-lg pl-9 pr-4 py-2 md:py-3 border border-darkgrey focus:outline-none focus:ring focus:border-midnight"
              />
              <div className="flex gap-x-2 px-6 py-3 rounded-lg text-awhite bg-amidnight items-center">
                <span className="text-blue-500 text-[1.3rem]">Edit</span>
                <span className="icon-[uil--edit] w-7 h-7"></span>
              </div>
            </div>
          </div>
          {/* Body and footer divisions */}
          <div className="py-4">
            {/* Body content */}
            <div className="overflow-x-auto border border-[#adadad] rounded-md">
              <table className="table-fixed w-full">
                <thead>
                  <tr className="bg-[#ecf0f5] text-[1.3rem] border-b border-[#adadad]">
                    <th className="px-4 py-2 flex items-center gap-x-1">
                      <span className="icon-[fluent--checkmark-square-20-regular] w-12 h-12 text-amidnight"></span>ID
                    </th>
                    <th className="px-4 py-2">Customer</th>
                    <th className="px-4 py-2">Phone Number</th>
                    <th className="px-4 py-2">Email</th>
                    <th className="px-4 py-2">Address</th>
                    <th className="px-4 py-2">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {data.map((row, index) => (
                    <tr
                      key={row.id}
                      className={`text-[1.1rem] ${
                        index !== data.length - 1 ? 'border-b border-[#adadad]' : ''
                      } ${row.initialColor}`}
                    >
                      <td className="px-4 py-2 text-center flex items-center gap-x-1">
                        <span className="icon-[fluent--checkmark-square-20-regular] w-12 h-12 text-amidnight"></span>
                        {row.id}
                      </td>
                      <td className="px-4 py-2 text-center">{row.customer}</td>
                      <td className="px-4 py-2 text-center">{row.phoneNumber}</td>
                      <td className="px-4 py-2 text-center">{row.email}</td>
                      <td className="px-4 py-2 text-center">{row.address}</td>
                      <td className="px-4 py-2 text-center">
                        <ToggleSwitch  onClick={() => toggleColor(index)}/>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-2">
            {/* Footer content */}
            
            <AdminCustomerPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerList;
