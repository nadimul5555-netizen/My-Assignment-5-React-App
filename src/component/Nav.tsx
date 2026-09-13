

const Nav = () => {
  return (
    <div className="h-25 bg-white sticky z-50 border-b border-gray-200 top-0">

    <div className="grid grid-cols-3  container mx-auto sticky  top-0 h-25 ">
        <div className="content-center mx-5 ">
            <img className="h-14" src="/assets/logo-text.png" />
        </div>
        <div className="flex justify-center items-center">
            <ul className="flex gap-7 text-[#475569]">
                <li>Home</li>
                <li>Technologies</li>
                <li>Projects</li>
                <li>About</li>
                <li>Connect</li>
            </ul>
        </div>
        <div className="flex justify-end mx-5 items-center gap-5">
            <h2>Sign In</h2>
            <button className="btn btn-secondary rounded-3xl">Sign Up</button>
        </div>
    </div>
    </div>
  )
}

export default Nav