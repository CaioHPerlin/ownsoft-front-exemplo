import HeroSection from './sections/HeroSection';
import Section from '../components/Section';

import firstScreenshot from '../assets/images/first.png';
import ProcessOtimizationSection from './sections/ProcessOptimizationSection';
import DataSecuritySection from './sections/DataSecuritySection';
import SchedulingSection from './sections/SchedulingSection';

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
    </>
  );
};

export default LandingPage;
