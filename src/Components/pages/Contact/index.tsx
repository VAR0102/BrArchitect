"use client";
import {useState} from "react";
import "./style.css"


export default function Contact() {
  const [formData, setFormData] = useState({
                                     name: "", email: "", subject: "", comment: "",
                                       });

  const [errors, setErrors] = useState({
                                         name: "", email: "", subject: "", comment: "",
                                       });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(
      {...formData, 
        [e.target.name]: e.target.value});
    setErrors({...errors, [e.target.name]: ""});
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  
    const newData = {
      name: formData.name.trim(),
      email: formData.email.trim(),
      subject: formData.subject.trim(),
      comment: formData.comment.trim(),
    };
  
    const newErrors = {
      name: !newData.name
        ? "Name is required"
        : /\d/.test(newData.name)
        ? "Name cannot contain numbers"
        : "",
      email: !newData.email ? "Email is required" : "",
      subject: !newData.subject ? "Subject is required" : "",
      comment: !newData.comment ? "Comment is required" : "",
    };
  
    setErrors(newErrors);
  
    const hasError = Object.values(newErrors).some(error => error !== "");
    if (!hasError) {
      const submittedData = {
        id: 1,
        name: newData.name,
        subject: newData.subject,
        comment: newData.comment,
      };
      console.log(submittedData);
    }
  };
  

  return ( <section className="content">
    <header>
      <div className="col">
        <h3 className="border-b border-[#f1f1f1] !pt-4 !pb-4 font-normal !mx-5 !my-2.5 text-[25px] leading-[1.5]">Contact</h3>
        <p className="!p-5">Lets get in touch and talk about your next project.</p>
      </div>
    </header>
    <main>
      <form onSubmit={handleSubmit} className="flex flex-col gap-[10px]">
        <div className="mb-[15px] !px-5">
          <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="mb-[15px] !px-5">
          <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="mb-[15px] !px-5">
          <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div className="mb-[15px] !px-5">
          <textarea
              name="comment"
              placeholder="Your Comment"
              rows={5}
              value={formData.comment}
              onChange={handleChange}
          ></textarea>
          {errors.comment && <span className="error">{errors.comment}</span>}
        </div>
      <div className="text-white bg-black mt-5 mb-4 ml-[10px] !px-[15px] !py-[10px] text-[15px] leading-[1.5]">
        <button type="submit" className="bg-gray-500 text-white border-none !mx-10 !my-2 !px-4 !py-4 cursor-pointer hover:bg-gray-500">SEND MESSAGE</button>
        </div>
      </form>
    </main>
  </section>);
}
