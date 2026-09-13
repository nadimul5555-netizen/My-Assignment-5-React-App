

const BigFooter = () => {
    return (
        <div className="border-y border-gray-200">
            <div className="container mx-auto grid grid-cols-1 lg:grid-cols-12 py-12">
                <div className="col-span-5">

                    <img className="p-5" src="/assets/logo-text.png"></img>


                    <p className="p-5 text-[#64748B]">Curated tools, technologies, and resources for developers building
                       <br /> modern software.</p>
                    <div className="flex gap-3 p-5">
                        <h2 className="font-bold ">GitHub</h2>
                        <h2 className="font-bold">Twitter</h2>
                        <h2 className="font-bold">LinkedIn</h2>
                    </div>
                </div>
                <div className="  hidden lg:block lg:col-span-2">
                    <h2 className="font-bold p-5">PRODUCT</h2>
                    <p className="p-5 text-[#64748B]">Home</p>
                    <p className="text-[#64748B] p-5">Technology</p>
                    <p className="text-[#64748B] pl-5">Project</p>
                </div>
                <div className=" hidden lg:block  lg:col-span-3">
                    <h2 className="font-bold p-5 ">COMPANY</h2>
                    <p className="text-[#64748B] p-5">About</p>
                    <p className="text-[#64748B] p-5">Contact</p>
                    <p className="text-[#64748B] pl-5">Careere</p>
                </div>
                <div className=" hidden lg:block lg:col-span-2">
                    <h2 className="font-bold p-5">Product</h2>
                    <p className="text-[#64748B] p-5">Privacy Policy</p>
                    <p className="text-[#64748B] p-5">Terms of Service</p>
                    
                </div>
                
            </div>
        </div>
    )
}

export default BigFooter
