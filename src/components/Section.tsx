import dotImage from '../assets/images/dot.png';

type DotPlacement = 'tl' | 'tr' | 'bl' | 'br';

type SectionProps = {
  height?: number;
  backgroundImage?: string;
  backgroundTint?: string | 'bg-white' | 'bg-secondary';
  dotPlacement?: DotPlacement[];
  children: React.ReactNode;
};

const Section: React.FC<SectionProps> = ({
  height = 600,
  backgroundImage,
  backgroundTint = 'bg-white',
  dotPlacement,
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
      className={`relative py-12 px-40 bg-cover bg-center text-white`}
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
              backgroundImage: `url('${dotImage}')`,
            }}
          ></div>
        ))}

      <div className="relative">{children}</div>
    </section>
  );
};

export default Section;
