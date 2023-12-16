import { useState } from 'react';
import Image from 'next/image';
import sun from '../img/sun.png'
import { motion } from 'framer-motion';
import buttonbackground from "../img/buttonbackground.png"
import buttonbackground2 from "../img/button2background.png"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    message: '',
  });

  const [file, setFile] = useState(null);

  const handleFocus = (e) => {
    e.target.parentNode.classList.add('focus');
    e.target.parentNode.classList.add('not-empty');
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === 'message' && !value.trim()) {
      e.target.parentNode.classList.remove('not-empty');
    }
    e.target.parentNode.classList.remove('focus');
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const discordWebhookUrl = 'https://discord.com/api/webhooks/1132443910170497164/nl4OKZ2tXVgjydb_jXdlvRHPgT7Plmz434E9znhv-LKpVUDq6cXO8xNrBrpTEya39uoe';

    const formDataDiscord = new FormData();
    formDataDiscord.append(
      'content',
      `New form submission:\nName: ${formData.firstName} ${formData.lastName}\nMessage: ${formData.message}`
    );

    if (file) {
      formDataDiscord.append('file', file);
    }

    try {
      const response = await fetch(discordWebhookUrl, {
        method: 'POST',
        body: formDataDiscord,
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      alert('Form submitted successfully!');
      setFormData({
        firstName: '',
        lastName: '',
        message: '',
      });
      setFile(null);
    } catch (error) {
      console.error('Error sending form data to Discord:', error);
      alert('An error occurred while submitting the form. Please try again later.');
    }
  };

  return (
    <div className="min-h-screen w-screen ">
      <div id="contact" className=' -translate-y-10 absolute'></div>
      <div className="px-[20%] w-screen flex justify-center text-center lg:mt-0 mt-20">
        <motion.h1 
        initial={{ y:20, opacity: 0}}
        whileInView={{ y:0, opacity: 1 }}
        transition={{ duration: 1, delay: 1}}
        viewport={{ once: true  }}
        className=' border-b-[3px] border-black font-inked leading-[44px] text-[40px] break-words w-screen  '>Contact</motion.h1>
      </div>
      <div className='lg:grid px-[20%] lg:grid-cols-2 mt-8 flex-wrap font-caros'>
        
        <motion.div 
          initial={{ x:-20, opacity: 0}}
          whileInView={{ x:0, opacity: 1 }}
          transition={{ duration: 1, delay: 0.5}}
          viewport={{ once: true, amount: "some"  }}
          className=" w-full z-[10]">

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="conInp-wrap">
                <label className='text-black'>First Name</label>
                <input
                  className="contact-input shadow-sm bg-white border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5 "
                  autoComplete="off"
                  name="firstName"
                  type="text"
                  value={formData.firstName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="First Name"
                  required
                />
                
              </div>
              <div className="conInp-wrap">
                <label className='text-black'>Last Name</label>
                <input
                  className="contact-input shadow-sm  border border-black text-black text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5"
                  autoComplete="off"
                  name="lastName"
                  type="text"
                  value={formData.lastName}
                  onChange={handleChange}
                  onFocus={handleFocus}
                  onBlur={handleBlur}
                  placeholder="Last Name"
                  required
                />
                
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block mb-2 text-sm font-medium text-black ">
                Your message
              </label>
              <textarea
                id="message"
                name="message"
                rows="6"
                className="block p-2.5 w-full text-sm text-black  rounded-lg shadow-sm border border-black focus:ring-black min-h-[250px] focus:border-black "
                placeholder="Leave a comment..."
                value={formData.message}
                onChange={handleChange}
                onFocus={handleFocus}
                onBlur={handleBlur}
                required
              ></textarea>
            </div>

            <div className='flex justify-center md:gap-10 gap-4 items-center flex-wrap'>
              <div className='md:w-[40%] w-full'>
                <label htmlFor="attachment" className="block mb-2 text-sm font-medium text-black">
                  Attachment
                </label>
                <div className="z-[2] w-[200px] h-[80px] flex items-center justify-center text-white ">
                  <p className='z-[1] text-[20px] font-inked tracking-[8px]'>Attachment</p>
                  <input type="file" id="attachment" name="attachment" onChange={handleFileChange} className='z-[2] opacity-0 w-[250px] h-[70px] absolute cursor-pointer'/>
                  <Image src={buttonbackground} alt="" className="w-[200px] h-[76px] absolute "></Image>
                </div>



                
              </div>
              
              <div className='md:w-[40%] w-full'>
                <label htmlFor="attachment" className="block mb-2 text-sm font-medium text-black">
                  Send Message
                </label>
                <button
                type="submit"
                className="z-[10] w-[200px] h-[80px] flex items-center justify-center text-white ">
                  <span className=" z-[1] text-[20px] font-inked tracking-[8px]">Send</span>
                  <Image src={buttonbackground2} alt="" className="w-[200px] h-[90px] absolute "></Image>
                </button>
              </div>
            
            </div>
          </form>
        </motion.div>

        <motion.div 
        initial={{ x:20, opacity: 0}}
        whileInView={{ x:0, opacity: 1 }}
        transition={{ duration: 1, delay: 0.5}}
        viewport={{ once: true, amount: "some"  }}
        className='flex w-full h-full justify-center items-center'>
          <Image src={sun} alt='' className='w-[300px] h-[300px] animate-bounce animate-duration-[10000ms] hidden lg:flex'></Image>
        </motion.div>

      </div>
    </div>
  );
};

export default ContactForm;
