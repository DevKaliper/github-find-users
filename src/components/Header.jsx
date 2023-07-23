const Header = () => {
    return (
        <div className="navbar glass gap-10 px-32 bg-[#988E6F]">
  <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex-1  btn btn-ghost normal-case text-xl relative ">
    <a className="invisible md:visible">Intergrated with </a>
    <img src="./src/img/GitHub_Logo_White.png"  className="absolute md:relative" alt="github" width={150} />
  </a>
  <div className="flex-none">
    <a href="https://github.com/DevKaliper/github-find-users" target="_blank" rel="noreferrer" className="btn btn-square btn-ghost flex w-fit h-fit gap-3 justify-center items-center">
         <img src="./src/img/github-mark.png" alt="" width={50} />
        
    <span className="font-mono text-base text-black underline invisible md:visible"> repo here</span>
    </a>

  </div>
</div>
    )
}

export default Header