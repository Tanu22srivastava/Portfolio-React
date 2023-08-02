import './App.css';

function Contact() {
  return (
    <section className="contact" id="contact">
        <h2 className="heading">Contact</h2>

        <form action="#">

            <div className="input-box">
                <div className="input-field">
                    <input type="text" placeholder='Full Name' required />
                    <span className="focus"></span>
                </div>
                <div className="input-field">
                    <input type="email" placeholder='E-Mail ' required />
                    <span className="focus"></span>
                </div>
            </div>

            <div className="input-box">
                <div className="input-field">
                    <input type="text" placeholder='Mobile Number' required />
                    <span className="focus"></span>
                </div>
                <div className="input-field">
                    <input type="email" placeholder='E-Mail Subject ' required />
                    <span className="focus"></span>
                </div>
                <div className="textarea-field">
                    <textarea name="" id="" cols="90" rows="10" placeholder='Your Message' required></textarea>
                    <span className="focus"></span>
                </div>
                
            </div>
            <div className="btn-box btns">
                    <a href="#" className='btn'>Submit</a>
                </div>
        </form>
    </section>
  );
}

export default Contact;