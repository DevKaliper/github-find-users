import React from 'react'
export const Footer = () => {
  return (
<footer className="footer bg-[#988E6F] glass absolute bottom-0 items-center p-4  text-white">
  <div className="items-center grid-flow-col">
    
    <p>Manuel Leon © 2023 - All right reserved</p>
  </div> 
  <div className=" md:place-self-center md:justify-self-end">
    <a href='https://github.com/DevKaliper' rel='noreferrer' target='_blank' className='flex gap-2 justify-center items-center text-lg font-mono'> <img src="https://cdn.discordapp.com/attachments/1125465851810820142/1132826120392286218/github-mark-white.png"  width={50} alt="" /> my Github
    </a> 
   
  </div>
</footer>
  )
}
