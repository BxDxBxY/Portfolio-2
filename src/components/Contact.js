import React, { useState } from 'react';

import { motion } from 'framer-motion';
import { fadeIn } from '../variants';
import { Alert, Snackbar} from '@mui/material';


const Contact = () => {
  const [ nameInp, setNameInp] = useState('')
  const [ emailInp, setEmailInp] = useState('')
  const [ messageInp, setMessageInp] = useState('')
  const [openSuccess, setOpenSuccess] = useState(false)
  const [openErr, setOpenErr] = useState(false)
  const [errMess, setErrMess] = useState("")
  let form = {name: nameInp, email:emailInp, message: messageInp}
  const handleSubmit = (e)=>{
    e.preventDefault()
      if(!nameInp) {
        setErrMess("Please enter your Name!")
       return setOpenErr(true)
      } 
      if(!emailInp) {
        setErrMess("Please enter your email!")
        return setOpenErr(true)
      } 
    if(!messageInp) {
      setErrMess("Please enter your message!")
      return setOpenErr(true)
    } 
    if(nameInp && emailInp && messageInp) {
      setNameInp("")
      setEmailInp("")
      setMessageInp("")
      return setOpenSuccess(true)
    } 
  }
  return <section id='contact' className='lg:section py-16'>
   <Snackbar open={openSuccess}  sx={{ width: '100%' }} spacing={2} onClose={()=>setOpenSuccess(false)}>
      <Alert onClose={() => {setOpenSuccess(false)}}>The message was sent successfully!</Alert>
    </Snackbar>
   <Snackbar open={openErr}  sx={{ width: '100%' }} spacing={2} onClose={()=>setOpenErr(false)}>
      <Alert severity='error' onClose={() => {setOpenErr(false)}}>{errMess? errMess : "Something went wrong!"}</Alert>
    </Snackbar>
    <div className="container mx-auto">
      <div className='flex flex-col lg:flex-row'>
        <motion.div
        variants={fadeIn('right', 0.3)}
        initial='hidden'
        whileInView={"show"}
        viewport={{once:false, amount: 0.3}}
        className='flex-1 flex justify-start items-center'>
          <div>
            <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>Get In Touch</h4>
            <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>Let's work <br /> together!</h2>
          </div>
        </motion.div>
        <motion.form
        variants={fadeIn('left', 0.3)}
        initial="hidden"
        onSubmit={handleSubmit}
        whileInView={'show'}
        viewport={{once:false, amount:0.3}}
        className='flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6 items-start'>
          <input    onChange={(e)=>setNameInp(e.target.value)} id={nameInp} className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder='Your Name' type="text" />
          <input    onChange={(e)=>setEmailInp(e.target.value)} id={emailInp} className='bg-transparent border-b py-3 outline-none w-full placeholder:text-white focus:border-accent transition-all' placeholder='Your Email' type="text" />
          <textarea onChange={(e)=>setMessageInp(e.target.value)} id={messageInp} className='bg-transparent border-b py-12 outline-none w-full placeholder:text-white focus:border-accent transition-all mb-12 resize-none' placeholder='Your Message'></textarea>
          <button className='btn btn-lg'>Send Message</button>
        </motion.form>
      </div>
    </div>
  </section>;
};

export default Contact;
