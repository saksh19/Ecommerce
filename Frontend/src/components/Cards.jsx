import React from 'react'

function Cards() {
  return (
    <>
    <div id='show'>
    <h5 className="mb-0.5 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased mt-3 ml-6 text-center  ">
                Categories
              </h5>
    </div>
      
    <div className="container mx-auto px-4 py-8">
      
      <div className="flex flex-wrap -mx-4">
        {/* Card 1 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative h-40 overflow-hidden rounded-t-xl bg-blue-500 bg-clip-border text-white shadow-lg shadow-blue-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src='https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'width="400" height="50"/>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Clothes
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Select
              </button>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative h-40 overflow-hidden rounded-t-xl bg-blue-500 bg-clip-border text-white shadow-lg shadow-blue-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
           <img src="https://images.pexels.com/photos/2002429/pexels-photo-2002429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" width="400" height="50"/>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Utensils
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Select
              </button>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative h-40 overflow-hidden rounded-t-xl bg-blue-500 bg-clip-border text-white shadow-lg shadow-blue-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src='https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Electronics
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Select
              </button>
            </div>
          </div>
        </div>
        
        {/* Card 4 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative h-40 overflow-hidden rounded-t-xl bg-blue-500 bg-clip-border text-white shadow-lg shadow-blue-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
           <img src='https://images.pexels.com/photos/139398/thermometer-headache-pain-pills-139398.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Pharmacy
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Select
              </button>
            </div>
          </div>
        </div>

        {/* Card 5 */}
        <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative h-40 overflow-hidden rounded-t-xl bg-blue-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
            <img src="https://images.pexels.com/photos/164634/pexels-photo-164634.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"/>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Transport
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Select
              </button>
            </div>
          </div>
        </div>

               {/* Card 5 */}
               <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
          <div className="relative flex flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
            <div className="relative h-40 overflow-hidden rounded-t-xl bg-blue-500 bg-clip-border text-white shadow-lg shadow-blue-500/40 bg-gradient-to-r from-blue-500 to-blue-600">
           <img src='https://images.pexels.com/photos/255514/pexels-photo-255514.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'/>
            </div>
            <div className="p-6">
              <h5 className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                Toys
              </h5>
              <p className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc felis ligula.
              </p>
            </div>
            <div className="p-6 pt-0">
              <button
                type="button"
                className="select-none rounded-lg bg-blue-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              >
                Select
              </button>
            </div>
          </div>
        </div>
   
   </div>
    </div>
    </>
    )
    }

    export default Cards
