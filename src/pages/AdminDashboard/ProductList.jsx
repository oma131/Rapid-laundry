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
          <div className="flex items-center border-b border-adarkgrey justify-between h-20">
            <div>
              <p className="text-[2rem] font-semibold">Products</p>
            </div>
            <div className="flex w-[40rem] items-center gap-x-2">
              <span className="icon-[ep--search] text-darkgrey pointer-events-none w-9 h-9 relative left-10"></span>
              <input
                type="text"
                placeholder="Search"
                className="bg-white w-32 md:w-[25rem] text-black rounded-lg pl-9 pr-4 py-2 md:py-3 border border-darkgrey focus:outline-none focus:ring focus:border-midnight"
              /> 
                 <a href='/add-products' className="flex gap-x-2 w-[23rem] py-3 rounded-lg text-awhite bg-amidnight items-center justify-center">
                <span className="text-blue-500 text-[1.3rem] text-nowrap">Add Products</span>
                <span className="icon-[ic--baseline-plus] w-7 h-7"></span>
              </a>
              
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
                      className={`text-[1.1rem] ${
                        index !== data.length - 1 ? 'border-b border-[#adadad]' : ''
                      } ${row.initialColor}`}
                    >
                      <td className="px-4 py-2 text-center flex items-center gap-x-1">
                        <span className="icon-[fluent--checkmark-square-20-regular] w-12 h-12 text-amidnight"></span>
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
