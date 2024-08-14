import React from 'react'

const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <div className='w-full h-[1px] bg-black-300'></div>
      <div className="h-fit py-14 w-full bg-black-100 relative flex flex-col items-center justify-center antialiased">
          <div className='h-fit contact-section-text flex flex-row justify-between text-neutral-400 w-[75%]'>

            <div className='contact-section-text-header mx-5 my-5'>
              <p className='mb-2 font-medium'>Contact</p>
              <ul>
                <li><a href='mailto:tle01.work@gmail.com' className='hover:text-neutral-500 hover:underline'>@tle01.work@gmail.com</a></li>
                <li><a href='mailto:tple06203@gmail.com' className='hover:text-neutral-500 hover:underline'>@tple06203@gmail.com</a></li>
                <li><a href='mailto:thai.le01@student.csulb.edu' className='hover:text-neutral-500 hover:underline'>@thai.le01@student.csulb.edu</a></li>
              </ul>
            </div>

            <div className='contact-section-text-header mx-5 my-5'>
              <p className='mb-2 font-medium'>Reach out</p>
              <ul>
                <li><a href='mailto:tle01.work@gmail.com' className='hover:text-neutral-500 hover:font-medium'>Email</a></li>
                <li><a href='https://www.linkedin.com/in/2770341b7/' className='hover:text-neutral-500 hover:font-medium'>LinkedIn</a></li>
              </ul>
            </div>

            <div className='contact-section-text-header mx-5 my-5'>
              <p className='mb-2 font-medium text-neutral-400'>Thoughts</p>
              <p>"I want to be a cowboy." - Me</p>
              <p>"If You Don't Take Risks, You Can't Create a Future." - Luffy</p>
            </div>


          </div>
      </div>

    </section>
  )
}

export default Contact