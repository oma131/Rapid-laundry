import React, { useState } from 'react';
import AdminTopbar from '../../component/AdminTopbar';
import gameIcons from '../../assets/game-icons.png'
import bubaIcons from '../../assets/Buba.png'
import towelIcons from '../../assets/towel.png'
import undergIcons from '../../assets/underg.png'
import AdminProductPagination from '../../component/AdminProductPages';
const ProductList = () => {
 
  const data = [
    { 
      id: 12345, 
     ProductName: 'Academic/Law Gown' ,
      Categories: 'Specialty Items', 
      Price: '3000',
      Price1: '2000',
      initialColor: 'bg-[#ffffff]' ,// white color
      image:gameIcons
    },
    { 
      id: 12346, 
      ProductName: 'Agbada' ,
      Categories: 'Specialty Items', 
      Price: '2500',
      Price1: '1500',
      initialColor: 'bg-[#ecf0f5]', // red color
      image:gameIcons
    },
    { 
      id: 12347, 
      ProductName: 'Abaya' ,
      Categories: 'Specialty Items', 
      Price: '1500',
      Price1: '1000',
      initialColor: 'bg-[#ffffff]' ,// white color
      image:gameIcons
    },
    { 
      id: 12348, 
      ProductName:'Duvet Cover' ,
      Categories: 'Home Textiles', 
      Price: '1500',
      Price1: '800',
      initialColor: 'bg-[#ecf0f5]', // red color
      image:towelIcons
      
    },
    { 
      id: 12349, 
      ProductName: 'Bathrobe' ,
      Categories: 'Home Textiles', 
      Price: '1500',
      Price1: '1000',
      initialColor: 'bg-[#ffffff]' ,// white color
      image:towelIcons
    },
    { 
      id: 12350, 
      ProductName: 'Blanket' ,
      Categories: 'Home Textiles', 
      Price: '1000',
      Price1: '700',
      initialColor: 'bg-[#ecf0f5]', // red color
      image:towelIcons
    },
    { 
      id: 12351, 
      ProductName: 'Blouse/Buba' ,
      Categories: 'Home Textiles', 
      Price: '1500',
      Price1: '1000',
      initialColor: 'bg-[#ffffff]', // white color
      image:towelIcons
    },
    { 
      id: 12352, 
      ProductName: 'Brassaire' ,
      Categories: 'Tops', 
      Price: '700',
      Price1: '500',
      initialColor: 'bg-[#ecf0f5]', // red color
      image:bubaIcons
    },
    { 
      id: 12353, 
      ProductName: 'Bed Sheet', 
      Categories: 'Undergarments', 
      Price: '700',
      Price1: 'N/A',
      initialColor: 'bg-[#ffffff]', // white color
      image:undergIcons
    }
  ];
  

  

  return (
    <div>
      <AdminTopbar />
      <div className="bg-gray-200 p-4">
        <div className="bg-white shadow-md rounded-lg p-4">
          <div className="flex flex-col w-full  py-1 justify-center border-b border-adarkgrey ">
           <div className='flex items-center justify-between w-full h-12 lg:h-20'>
           <div>
              <p className="lg:text-[2rem] text-[1.1rem] font-semibold">Products</p>
            </div>
            <div className="flex lg:w-[40rem] items-center gap-x-2">
              <span className="icon-[ep--search] text-darkgrey pointer-events-none w-5 h-5 lg:w-9 lg:h-9 relative left-10"></span>
              <input
                type="text"
                placeholder="Search"
                className="bg-white w-32 md:w-[25rem] text-black lg:rounded-lg rounded-md pl-9 pr-4 py-1 lg:py-3 border border-darkgrey focus:outline-none focus:ring focus:border-amidnight"
              /> 
                 <a href='/add-products' className="hidden lg:flex flex gap-x-2 lg:px-6 px-3 lg:py-3 py-1 lg:rounded-lg mb-1 rounded-md text-awhite bg-amidnight items-center">
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem] text-nowrap">Add Products</span>
                <span className="icon-[ic--baseline-plus] lg:w-7 lg:h-7 h-5 w-5"></span>
              </a>
              
              <div className="hidden lg:flex flex gap-x-2 lg:px-6 px-3 lg:py-3 py-1 lg:rounded-lg mb-1 rounded-md text-awhite bg-amidnight items-center">
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem]">Edit</span>
                <span className="icon-[uil--edit] lg:w-7 lg:h-7 h-5 w-5"></span>
              </div>
            </div>
           </div>
           <div className='flex items-center w-full justify-between'>
              
              <div className=" lg:hidden flex gap-x-2 lg:px-6 px-3 lg:py-3 py-1 lg:rounded-lg rounded-md mb-1 text-awhite bg-amidnight items-center">
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem]">Edit</span>
                <span className="icon-[uil--edit] lg:w-7 lg:h-7 h-5 w-5"></span>
              </div>
              <a href='/add-products' className=" lg:hidden flex  gap-x-1  w-[10rem] lg:py-3 py-1  rounded-md text-awhite bg-amidnight items-center justify-center">
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem] text-nowrap">Add Products</span>
                <span className="icon-[ic--baseline-plus] lg:w-7 lg:h-7 h-5 w-5"></span>
              </a>
           </div>
          </div>
          {/* Body and footer divisions */}
          <div className="py-4">
            {/* Body content */}
            <div className="overflow-x-auto border border-[#adadad] rounded-md" style={{ scrollbarWidth: 'none' }}>
              <table className="table-fixed lg:w-[65rem]">
                <thead>
                  <tr className="bg-[#ecf0f5] lg:text-[1.3rem] text-[1.1rem] border-b border-[#adadad]">
                    <th className="px-4 py-3 flex items-center gap-x-1">
                      <span className="icon-[fluent--checkmark-square-20-regular] lg:w-12 lg:h-12 w-10 h-10 text-amidnight"></span>ID
                    </th>
                    <th className="px-4 py-2">Customer</th>
                    <th className="px-4 py-2">Category</th>
                    <th className="px-4 py-2">Price <br /> (Launder)</th>
                    <th className="px-4 py-2">Price <br /> (Iron)</th>
                    <th className="px-4 py-2">Action</th>
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
                        <span className="icon-[fluent--checkmark-square-20-regular] lg:w-12 lg:h-12 w-10 h-10 text-amidnight"></span>
                        {row.id}
                      </td>
                      <td className="px-4 py-2 text-center"><span className='flex items-center gap-x-2'> <img className='W-12 h-12 object-cover' src={row.image} alt="" />{row.ProductName}</span></td>
                      <td className="px-4 py-2 text-center">{row.Categories}</td>
                      <td className="px-4 py-2 text-center">{row.Price}</td>
                      <td className="px-4 py-2 text-center">{row.Price1}</td>
                      <td className="px-4 py-2 text-center">
                      <span className="icon-[mage--trash-3] w-12 h-12 text-[#990404]"></span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <div className="mt-2">
            {/* Footer content */}
            <AdminProductPagination />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
