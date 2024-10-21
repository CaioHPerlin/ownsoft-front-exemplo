import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../assets/images/background.png';
import logoImage from '../assets/images/logo-white.png';
import Section from './Section';

const HeroSection = () => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate('#login'); // Navigation example
  };

  return (
    <Section
      height={680}
      backgroundImage={backgroundImage}
      backgroundTint={'bg-hero-blue'}
      dotPlacement={['bl', 'tr']}
    >
      <header className="relative text-center flex-1 flex-nowrap justify-between items-center justify-items-center">
        <Link to={'/'}>
          <img src={logoImage} alt="SoftOwn Solutions Logo" className="w-64" />{' '}
        </Link>
        <button
          onClick={handleButtonClick}
          className="px-4 py-2 bg-white hover:bg-blue-700 font-light text-hero-blue transition duration-150 hover:text-white rounded"
          aria-label="Access the system"
        >
          Acessar o <strong className="font-bold">Sistema</strong>
        </button>
      </header>
    </Section>
  );
};

export default HeroSection;
