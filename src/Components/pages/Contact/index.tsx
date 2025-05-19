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
        <h3 className="contacts">Contact</h3>
        <p className="something">Lets get in touch and talk about your next project.</p>
      </div>
    </header>
    <main>
      <form onSubmit={handleSubmit} className="contact-form">
        <div className="input-group">
          <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="input-group">
          <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="input-group">
          <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
          />
          {errors.subject && <span className="error">{errors.subject}</span>}
        </div>

        <div className="input-group">
          <textarea
              name="comment"
              placeholder="Your Comment"
              rows={5}
              value={formData.comment}
              onChange={handleChange}
          ></textarea>
          {errors.comment && <span className="error">{errors.comment}</span>}
        </div>
      <div className="message-send">
        <button type="submit" className="send-button">SEND MESSAGE</button>
        </div>
      </form>
    </main>
  </section>);
}
