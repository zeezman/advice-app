import React,{useRef} from "react";
import emailjs from '@emailjs/browser';

const Email = () => {
     const form = useRef();

    const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_67y8a1d', 'template_0co7zwm', form.current, 'lpkdI_oeVSizcZGEw')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
  };


  return (
        <>            
           <h3> getting started with email js </h3> 
        <div className="em">
           <form ref={form} onSubmit={sendEmail}> 
            <input type="text" name="name" placeholder="Name"/> <br /><br /> 
            <input type="email" name="email" placeholder="Email"/> <br /><br /> 
            <textarea name="message" placeholder="Message"/> <br /><br />
            <input type="submit" value="Send" /> 
          </form>
      </div> 
      </>
  )
};

export default Email;
