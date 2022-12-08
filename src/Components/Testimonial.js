import React from 'react'

function Testimonial() {
  return (
    <section className="text-gray-400 bg-gray-900 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/302x302"/>
          <p className="leading-relaxed">What a beautiful course, just loved it...</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-white font-medium title-font tracking-wider text-sm">HOLDEN CAULFIELD</h2>
          <p className="text-gray-500">B.Tech,Cse</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 mb-6 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/300x300"/>
          <p className="leading-relaxed">Edison bulb retro cng vinegar cronut adaptogen squid fanny pack vaporware.</p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-white font-medium title-font tracking-wider text-sm">ALPER KAMU</h2>
          <p className="text-gray-500">B.Com</p>
        </div>
      </div>
      <div className="lg:w-1/3 lg:mb-0 p-4">
        <div className="h-full text-center">
          <img alt="testimonial" className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10" src="https://dummyimage.com/305x305"/>
          <p className="leading-relaxed">lorem ipsum revires reuew cuieut uatreat sdws utrertco wevunewsd cmcqeismanck at is taslima </p>
          <span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-6 mb-4"></span>
          <h2 className="text-white font-medium title-font tracking-wider text-sm">HENRY LETHAM</h2>
          <p className="text-gray-500">B.Pharma</p>
        </div>
      </div>
    </div>
  </div>
</section>
  )
}

export default Testimonial