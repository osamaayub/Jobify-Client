
import styled from 'styled-components';
import Logo from '../components/Logo';
import { Link } from 'react-router-dom';
import main from "../assets/images/main.svg";
import Wrapper from "../assets/wrappers/LandingPage";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className='container page'>
        <div className='info'>
          <h1>Job<span>Tracking</span>app</h1>
          <p>I'm baby wayfarers hoodie next level taiyaki brooklyn cliche blue
            bottle single-origin coffee chia. Aesthetic post-ironic venmo,
            quinoa lo-fi tote bag adaptogen everyday carry meggings +1 brunch
            narwhal.</p>
          <Link to="/login" className='btn register-link'>
            Register
          </Link>
          <Link to="/register" className='btn'>
            Login/Demo User
          </Link>
        </div>
        <div>
          <img
            src={main}
            className='img main-img'
            alt='job hunt'
          />
        </div>
      </div>
    </Wrapper>
  )
}

const StylWrapper = styled.section`

nav{
  width:var(--fluid-width);
  max-width:var(--max-width);
  margin:0 auto;
  height:var(--max-height);
  display:flex;
  align-items:center;
}

.page{
min-height:calc(100vh-var(--nav-height));
display:grid;
align-items:center;
margin-top:3rem;
}
h1{
  font-weight:700;
  span{
    color:var(--primary-500);
    margin-bottom:1.5rem;
  }
  p{
    line-height:2;
    color:var(--text-secondary-color);
    margin-bottom:1.5rem;
    max-width:35em;
  }
}
.register-link{
  margin-right:1.5rem;
}
  .main-img{
    display:none;
  }
  .btn{
    padding:0.75rem 1rem;
  }
}`;




export default Landing
