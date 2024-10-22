import checkIcon from '../assets/images/check-icon.svg';

type BulletPointProps = {
  title: string;
  description: string;
  color?: 'blue' | 'white';
};

const BulletPoint: React.FC<BulletPointProps> = ({ title, description, color = 'blue' }) => {
  const bulletFilter =
    color === 'blue'
      ? 'invert(26%) sepia(69%) saturate(4825%) hue-rotate(199deg) brightness(106%) contrast(98%)'
      : 'invert(1)';

  return (
    <div className="flex items-start mb-1">
      <img
        src={checkIcon}
        alt="Check icon"
        className={`mr-2 mt-[2px] `}
        style={{ filter: bulletFilter }}
      />
      <div
        className={`${color === 'blue' ? 'text-black' : 'text-white'}  text-leftfont-light text-sm`}
      >
        <strong className={`${color === 'blue' ? 'text-blue-500' : 'text-white'} font-bold`}>
          {title}
        </strong>{' '}
        {description}
      </div>
    </div>
  );
};

export default BulletPoint;
