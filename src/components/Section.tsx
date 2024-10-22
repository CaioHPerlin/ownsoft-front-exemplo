import dotImage from '../assets/images/dots.png';
import blueDotImage from '../assets/images/dots-blue.png';

type DotPlacement = 'tl' | 'tr' | 'bl' | 'br';

type SectionProps = {
  height?: number;
  backgroundImage?: string;
  backgroundTint?: 'bg-white' | 'bg-secondary' | string;
  dotPlacement?: DotPlacement[];
  blueDots?: boolean;
  style?: string;
  children?: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  height = 600,
  backgroundImage,
  backgroundTint = 'bg-white',
  dotPlacement,
  blueDots = false,
  style,
  children,
}) => {
  const getDotPosition = (pos: DotPlacement): string => {
    switch (pos) {
      case 'tl':
        return 'top-0 left-24';
      case 'tr':
        return 'top-0 right-24';
      case 'bl':
        return 'bottom-0 left-24';
      case 'br':
        return 'bottom-0 right-24';
      default:
        return '';
    }
  };

  return (
    <section
      className={`relative z-10 py-12 px-40 bg-cover bg-center ${style ? style : ''} text-white`}
      style={{ backgroundImage: `url(${backgroundImage})`, height: height }}
    >
      {/* Background Tint */}
      {backgroundTint && <div className={`absolute inset-0 ${backgroundTint}`}></div>}

      {/* Dot Placement */}
      {dotPlacement &&
        dotPlacement.map(pos => (
          <div
            key={pos}
            className={`absolute ${getDotPosition(pos)} z-10 w-80 right h-80 bg-contain bg-no-repeat`}
            style={{
              backgroundImage: `url('${blueDots ? blueDotImage : dotImage}')`,
            }}
          ></div>
        ))}

      <div className="relative w-full z-20">{children}</div>
    </section>
  );
};

export default Section;
