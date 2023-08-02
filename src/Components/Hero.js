import './App.css';
import homeImage from '../Images/home3.jpg'; // Import the image
function Hero() {
  return (
    <section className="hero" id='hero'>
      <h2 className="heading">About Me</h2>


      <div className="hero-image">
        <img src={homeImage} alt="Home" />
        <span className="circle-spin"></span>

      </div>
      <div className="about-content">
        <h3>WEB DEVELOPER</h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quae laborum facere accusamus expedita temporibus nemo, atque, possimus doloribus nisi aspernatur minus quia enim veniam. Saepe facilis aperiam vitae inventore!  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio hic quo recusandae similique debitis quasi nobis. Ratione exercitationem similique praesentium voluptas dicta nam iure natus alias placeat, dignissimos rem hic?  </p>
      </div>
      <div className="btn-box btns">
      <a href="#" className='btn'>Read more</a>
      </div>
    </section>
  );
}

export default Hero;