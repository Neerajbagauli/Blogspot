import React from 'react'
import { Footer } from 'flowbite-react'
import { Link } from 'react-router-dom'

const FooterCom = () => {
  return (
    <Footer container className='border border-t-8 border-cyan-600'>
        <div className='w-full max-w-7xl mx-auto'>
            <div className=''>
                <div className=''>
                <Link to ="/" className ='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-white' >
        <span className ='px-2 py-1 bg-gradient-to-t from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white'>Blog </span>
        Spot
      </Link>
                </div>
                <div className='grid grid-cols-2 gap-3 sm:mt-4 sm:grid-cols-3 sm:gap-6'>
                <div>
              <Footer.Title title='About' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.100jsprojects.com'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Portfolio
                </Footer.Link>
                <Footer.Link
                  href='/about'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Blogspot
                </Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Follow us' />
              <Footer.LinkGroup col>
                <Footer.Link
                  href='https://www.github.com/Neerajbagauli'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  Github
                </Footer.Link>
                <Footer.Link href='https://www.linkedin.com/in/neeraj-bagauli-040684269'>LinkedIn</Footer.Link>
              </Footer.LinkGroup>
            </div>
            <div>
              <Footer.Title title='Legal' />
              <Footer.LinkGroup col>
                <Footer.Link href='#'>Privacy Policy</Footer.Link>
                <Footer.Link href='#'>Terms &amp; Conditions</Footer.Link>
              </Footer.LinkGroup>
            </div>
          </div>
        </div>
        <Footer.Divider />
        <div className='w-full sm:flex sm:items-center sm:justify-between'>
          <Footer.Copyright
            href='#'
            by="GrooT"
            year={new Date().getFullYear()}
          />
                </div>
            </div>
        
        
    </Footer>
  )
}

export default FooterCom