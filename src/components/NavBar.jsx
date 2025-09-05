import React from 'react'

const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
];

const NavBar = () => {
  return (
    <>
    <nav className="fixed top-0 w-full border-b border-[#09d5fe] text-2xl text-white">
      <div className='md:flex items-center space-x-8'>
        {navLinks.map((link) => (
          <a 
            key={link.name} 
            href={link.href} 
            className="px-3 py-2 hover:text-[#09d5fe] transition-colors duration-300"
          >
            {link.name}
          </a>
        ))}
      </div>
    </nav>
    </>
  )
}

export default NavBar