import checkIcon from '../assets/images/check-icon.svg';

type BulletPointProps = {
  title: string;
  description: string;
};

const BulletPoint: React.FC<BulletPointProps> = ({ title, description }) => {
  return (
    <div className="flex items-start mb-1">
      <img src={checkIcon} alt="Check icon" className="mr-2 mt-[2px]" />
      <div className="text-left text-black font-light text-sm">
        <strong className="text-blue-500 font-bold">{title}</strong> {description}
      </div>
    </div>
  );
};

export default BulletPoint;
