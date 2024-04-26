
import React from 'react'
import AdminTopbar from '../../component/AdminTopbar'
const AdminDashboard = () => {

  const data = [
    {
      iconClassName: "icon-[mdi--user]",
      bgColorClassName: "bg-[#3938ff]",
      total: 0,
      description: "Total number of",
      description2: "users"
    },
    {
      iconClassName: "icon-[solar--wallet-money-broken]",
      bgColorClassName: "bg-[#fdc106]",
      total: 0,
      description: "Total amount of" ,
      description2: "money earned"
    },
    {
      iconClassName: "icon-[material-symbols--shopping-cart-outline]",  
      bgColorClassName: "bg-[#0100bb]",
      total: 0,
      description: "Total number of " ,
      description2: "orders"
    },
    {
      iconClassName: "icon-[solar--bag-check-broken]",  
      bgColorClassName: "bg-[#28a745]",
      total: 0,
      description: "Total number of " ,
      description2: " completed orders"
    },
    {
      iconClassName: "icon-[iconoir--timer]",  
      bgColorClassName: "bg-[#ff5d01]",
      total: 0,
      description: "Total number of " ,
      description2: " pending orders"
    },
    {
      iconClassName: "icon-[mingcute--sandglass-fill]",  
      bgColorClassName: "bg-[#f91f1f]",
      total: 0,
      description: "Total number of " ,
      description2: " undelivered orders"
    },
    {
      iconClassName: "icon-[material-symbols--cancel]",  
      bgColorClassName: "bg-[#c20505]",
      total: 0,
      description: "Total number of " ,
      description2: " cancelled orders"
    },
    // Add more objects for additional divs as needed <span class=></span>
  ];

  return (
    <div>
      <AdminTopbar />
      <div>
      <div className="grid w-[80rem]  ml-[3rem] grid-cols-3  gap-x-4 justify-center">
      {data.map((item, index) => (
        <div key={index} className="bg-alight m-[1.5rem] rounded-md px-[2rem] py-4 flex items-center w-[26rem] gap-x-4 shadow-xl">
          <div className={`h-[6rem] w-[6rem] flex items-center justify-center rounded-full ${item.bgColorClassName}`}>
            <span className={item.iconClassName + " text-awhite h-12 w-12 "}></span>
          </div>
          <div>
            <p className="text-[5rem]">{item.total}</p>
            <p className="relative text-[1.5rem] -top-[1.5rem]">{item.description}</p>
            <p className="relative text-[1.5rem] -top-[1.5rem]">{item.description2}</p>
          </div>
        </div>
      ))}
    </div>
      </div>
    </div>
  )
}

export default AdminDashboard



