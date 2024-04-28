import React, { useState } from 'react';
import AdminTopbar from '../../component/AdminTopbar';


const AddProducts = () => {
    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [launder, setLaunder] = useState(false);
    const [iron, setIron] = useState(false);
    const [iconUrl, setIconUrl] = useState('');
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle form submission here
      console.log({
        productName,
        productCategory,
        launder,
        iron,
        iconUrl
      });
    };
  

  return (
    <div>
      <AdminTopbar />
        <div className="">
          <div className="flex items-center px-8 border-b border-adarkgrey justify-between h-16 lg:h-20">
            <div>
              <p className="lg:text-[2rem] text-[1.1rem] font-semibold">Add Products</p>
            </div>
            <div className="flex items-center gap-x-2">
           
            <div className=" flex gap-x-2 lg:px-6 px-3 lg:py-3 py-1 lg:rounded-lg mb-1 rounded-md text-awhite bg-amidnight items-center">
                <span className="text-blue-500 text-[1.1rem] lg:text-[1.3rem]">Edit</span>
                <span className="icon-[uil--edit] lg:w-7 lg:h-7 h-5 w-5"></span>
              </div>
            </div>
          </div>
          <form onSubmit={handleSubmit} className="lg:w-[65rem] px-8 py-8 ">
      <div className="mb-4">
        <label htmlFor="productName" className="block text-[1.1rem] lg:text-[1.5rem] font-medium text-gray-700">Product Name</label>
        <input 
          type="text" 
          id="productName" 
          className="mt-1 px-2 lg:py-4 py-3 border border-gray-300 rounded-md w-full"
          value={productName} 
          onChange={(e) => setProductName(e.target.value)} 
          required 
        />
      </div>
      <div className="mb-12">
        <label htmlFor="productCategory" className="block text-[1.1rem] lg:text-[1.5rem] font-medium text-gray-700">Product Category</label>
        <input 
          type="text" 
          id="productCategory" 
          className="mt-1 px-2 lg:py-4 py-3 border border-gray-300 rounded-md w-full"
          value={productCategory} 
          onChange={(e) => setProductCategory(e.target.value)} 
          required 
        />
      </div>
      <div className="text-[1.2rem] lg:text-[1.6rem] mb-5 font-medium text-gray-700">Price</div>
      <div className="mb-4">
      <label htmlFor="launder" className="text-[1.1rem] lg:text-[1.5rem] font-medium text-gray-700">Launder</label>
        <input 
          type="number" 
          id="launder" 
          className="mt-1 px-2 lg:py-4 py-3 border border-gray-300 rounded-md w-full"
          checked={launder} 
          onChange={(e) => setLaunder(e.target.checked)} 
        />
      </div>
      <div className="mb-4">
      <label htmlFor="iron" className="text-[1.1rem] lg:text-[1.5rem] font-medium text-gray-700">Iron</label>
        <input 
          type="number" 
          id="iron" 
          className="mt-1 px-2 lg:py-4 py-3 border border-gray-300 rounded-md w-full"
          checked={iron} 
          onChange={(e) => setIron(e.target.checked)} 
        />
      </div>
      <div className="mb-4">
        <label htmlFor="iconUrl" className="block text-[1.1rem] lg:text-[1.5rem] font-medium text-gray-700">Icon URL</label>
        <input 
          type="url" 
          id="iconUrl" 
          className="mt-1 px-2 lg:py-4 py-3 border border-gray-300 rounded-md w-full"
          value={iconUrl} 
          onChange={(e) => setIconUrl(e.target.value)} 
          required 
        />
      </div>
      <button type="submit" className="bg-amidnight lg:mt-8 mt-4 text-awhite py-2 px-16 text-[1.2rem] font-semibold rounded-lg hover:bg-blue-600"><a href='/products-list'>Save</a></button>
    </form>
        </div>
    </div>
  )
}

export default AddProducts

