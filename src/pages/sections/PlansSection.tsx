import Plans from '../../components/Plans';
import Section from '../../components/Section';
import Text from '../../components/Text';

type PlansSectionProps = {
  backgroundTint?: 'bg-white' | 'bg-secondary' | string;
  text: string | null;
  subText: string | null;
};

const PlansSection: React.FC<PlansSectionProps> = ({ backgroundTint, text, subText }) => {
  return (
    <Section height={700} backgroundTint={backgroundTint} style="flex items-center justify-center">
      <div className="flex flex-col items-center">
        <Text.H1 style="text-blue-600">{text}</Text.H1>
        <Text.P style="text-gray-600 text-lg py-2 font-light whitespace-pre-line">{subText}</Text.P>
        <Plans />
      </div>
    </Section>
  );
};

export default PlansSection;
