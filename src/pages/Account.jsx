import React from 'react'
import SavedShows from '../component/SavedShows'

const Account = () => {
  return (
    <>
    <div className='w-full text-white '>
     <img
        className=" w-full h-[400px] object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/5ea364b1-8e59-4693-8ad8-f0eaee32d1bf/e31f91e4-365e-4728-9bcd-09604798e642/NP-en-20220530-popsignuptwoweeks-perspective_alpha_website_large.jpg"
        alt=""
      />
      {/* add an overlay onhere */}

     <div className='bg-black/60 fixed top-0 left-0 w-full h-[550px]'>
     </div>

     <div className='absolute top-[20%] p-4 md:p-8'>
      <h1 className='text-3xl md:text-5xl font-bold'>My Shows</h1>
     </div>
    </div>
    <SavedShows/>
     
    </>
  )
}

export default Account