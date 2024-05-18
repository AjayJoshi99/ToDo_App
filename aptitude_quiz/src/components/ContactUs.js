import React from 'react'
import { useNavigate } from 'react-router-dom';


function ContactUs(props) {
  const bool = props.prop;
  const x = useNavigate();

  return (
    <div>
      {bool && (
        <div> <div className="container">
          <h2 className='h1 fst-italic'>Contact Us</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label ml-0">Your Name</label>
              <input type="text" className="form-control" id="name" placeholder="Ajay Joshi" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="ajay1908@gmail.com" required />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Write your message here..." required></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
          </form>
        </div>
          <div className='container mt-4 pt-3 border-top border-dark'>
            <div className='row'>
              <div className='col-4 border-end border-dark'>
                <b>Address:</b><br />
                Rano tower,<br />
                kalavad Road,<br />
                Rajkot - 360005<br />
                Gujarat
              </div>
              <div className='col-4 border-end border-dark'>
                <b>Email : </b><br />
                ajayjoshi1908@gmail.com<br />
                ajay.joshi119418marwadiuniversity.ac.in
              </div>
              <div className='col-4'>
                <b>Contact N0. : </b> <br />
                9879919024
              </div>
            </div>
          </div>
          </div>
      )}
        {
          !bool && x('Login')
        }

    </div>
  )
}

export default ContactUs;