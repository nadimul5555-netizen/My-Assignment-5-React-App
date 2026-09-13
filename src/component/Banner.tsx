

const Banner = () => {
    return (
        <div className=' grid grid-cols-2 container mx-auto my-20'>
            <div className="my-auto mx-8">
                <h1 className='  text-7xl  font-bold' >Build Your Ideal</h1>
                <h1 className="py-5 text-7xl font-bold bg-linear-to-r from-[#FF5722] via-[#D81B7E] to-[#7C3AED] bg-clip-text text-transparent">
                    Development Stack
                </h1>
                <h2 className='text-2xl leading-10 text-[#475569]'>Explore frontend, backend, database, and tooling options,
                    compare them side by side, and put together the stack that fits your
                    next project.</h2>
                <div className='flex gap-3 my-10'>

                    <button className="text-white btn bg-linear-to-r/increasing from-[#FF5722] to-[#D81B7E]  rounded-lg ">Explore Technologies</button>
                    <button className='text-[#475569] btn px-10 items-center'>Learn More</button>
                </div>
            </div>
            <div className="flex justify-center">
                <img src='/assets/banner-stack.png' />
            </div>
        </div>
    )
}

export default Banner
