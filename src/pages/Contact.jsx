import { FiUser, FiMail, FiMessageSquare } from 'react-icons/fi';

function Contact() {
  return (
    <div className='container mx-auto px-4'>
      <div className="Contact p-10 mt-32 max-w-4xl sm:w-full mx-auto">
      <h1 className='text-4xl mb-2 font-bold text-center' data-aos="fade-up" data-aos-duration="1000">Contact</h1>
      <p className='text-base/loose text-center opacity-50 mb-10' data-aos="fade-up" data-aos-duration="1000" >Let's get connected with me!</p>
      <form action="https://formsubmit.co/rhaffle87@gmail.com" method="POST" className='bg-zinc-800 p-10 rounded-md w-full mx-auto' autoComplete='off' data-aos="fade-up" data-aos-duration="1000" data-aos-delaty="500">
        <div className='flex flex-col gap-6'>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold flex items-center gap-2'><FiUser /> Name</label>
            <input type="text" name='Name' placeholder='Input your name ...' className='border border-zinc-500 p-2 rounded-md' required/>
          </div>
          <div className='flex flex-col gap-2'>
            <label className='font-semibold flex items-center gap-2'><FiMail /> Email</label>
            <input type="email" name='Email' placeholder='Input your email ...' className='border border-zinc-500 p-2 rounded-md' required/>
          </div>
          <div className='flex flex-col gap-2'>
            <label htmlFor='Message' className='font-semibold flex items-center gap-2'><FiMessageSquare /> Message</label>
            <textarea name="Message" id="Message" cols={45} rows={7} placeholder='Give me your Message ...' className='border border-zinc-500 p-2 rounded-md' required ></textarea>
          </div>
          <div className='text-center'>
            <button type='submit' className='bg-yellow-700 p-3 rounded-lg w-full cursor-pointer border border-zinc-600 hover:bg-yellow-600 transition-colors'>Send Message</button>
          </div>
        </div>
      </form>
      </div>
    </div>
  )
}

export default Contact
