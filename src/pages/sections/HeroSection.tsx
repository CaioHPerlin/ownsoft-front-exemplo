import { Link, useNavigate } from 'react-router-dom';
import backgroundImage from '../../assets/images/background.png';
import logoImage from '../../assets/images/logo-white.png';
import Section from '../../components/Section';
import Button from '../../components/Button';
import Text from '../../components/Text';

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
      {/* Header */}
      <header className="flex justify-between items-center h-full">
        <Link to={'/'}>
          <img src={logoImage} alt="SoftOwn Solutions Logo" className="w-64" />
        </Link>
        <Button onClick={handleButtonClick} theme="primary">
          Acessar o <strong className="font-bold">Sistema</strong>
        </Button>
      </header>

      {/* Text */}
      <Text.Title style="pt-12 py-8">
        Eleve sua experiênca com a gestão inteligente de processos.
      </Text.Title>
      <Text.P>
        <strong>Diga adeus à planilhas e papéis!</strong>
        <br />
        Nosso sistema transforma a forma como você gerencia seus casos.
        <br />
        Automatize tarefas, centralize informações e ganhe mais tempo para
        <br /> focar no que realmente importa: <strong>seus clientes.</strong>
      </Text.P>

      {/* Buttons */}
      <div className="flex font-bold justify-center py-8 gap-5 items-center">
        <Button style="font-bold">Conheça nossa ferramenta</Button>
        <Button style="font-bold" theme="secondary">
          Conheça nossos planos
        </Button>
      </div>
    </Section>
  );
};

export default HeroSection;
