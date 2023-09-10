import styled from 'styled-components';
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Link } from 'react-router-dom';
import { Logo } from '../components';

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            I'm baby twee drinking vinegar truffaut pop-up trust fund normcore,
            shabby chic cray adaptogen YOLO PBR&B chillwave narwhal lyft
            helvetica. Squid beard ascot praxis kale chips keffiyeh post-ironic
            vice pug farm-to-table marfa PBR&B pop-up unicorn hell of.
            Vibecession ethical snackwave, VHS tousled butcher craft beer
            cornhole cliche pinterest. Retro direct trade kinfolk, try-hard
            fixie cornhole taxidermy.
          </p>
          <Link to="/register" className="btn register-link">
            Register
          </Link>
          <Link to="/login" className="btn">
            Login / Demo User
          </Link>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default Landing;
