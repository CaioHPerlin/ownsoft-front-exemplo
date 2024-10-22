import HeroSection from './sections/HeroSection';
import Section from '../components/Section';

import firstScreenshot from '../assets/images/first.png';
import ProcessOtimizationSection from './sections/ProcessOptimizationSection';
import DataSecuritySection from './sections/DataSecuritySection';
import SchedulingSection from './sections/SchedulingSection';
import IllustrationSection from './sections/IllustrationSection';
import WhatsAppBanner from './sections/WhatsAppBanner';
import PlansSection from './sections/PlansSection';
import FAQSection from './sections/FAQSection';

const LandingPage: React.FC = () => {
  return (
    <>
      <HeroSection />

      {/* First Screenshot Section  */}
      <Section height={450}>
        <img className="-mt-32" src={firstScreenshot}></img>
      </Section>

      <ProcessOtimizationSection />
      <DataSecuritySection />
      <SchedulingSection />
      <IllustrationSection />
      <WhatsAppBanner
        backgroundTint="bg-secondary"
        text="Agende uma demonstração gratuita"
        subText="Entre em contato com nosso time e agende uma demonstração gratuita!"
      />
      <PlansSection
        backgroundTint="bg-primary"
        text={'Nossos Planos'}
        subText={'Encontre o melhor plano de acordo com\na necessidade do seu escritório.'}
      />
      <FAQSection backgroundTint="bg-secondary" />
      <WhatsAppBanner
        backgroundTint="bg-primary"
        text="Agende uma demonstração gratuita"
        subText="Descubra como nossa plataforma pode transformar seu escritório."
      />
    </>
  );
};

export default LandingPage;
