import dotImage from '../assets/images/dots.png';
import blueDotImage from '../assets/images/dots-blue.png';
import { useEffect, useState } from 'react';

type DotPlacement = 'tl' | 'tr' | 'bl' | 'br';

type SectionProps = {
  height?: number; // You can pass the height as a prop
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
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  // Workaround on tailwind issue
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

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
      className={`relative z-10 py-8 md:py-12 px-4 md:px-40 bg-cover bg-center ${style || ''} text-white`}
      style={{
        backgroundImage: `url(${backgroundImage})`,
        minHeight: windowWidth >= 1000 ? height : undefined,
      }}
    >
      {/* Background Tint */}
      {backgroundTint && <div className={`absolute inset-0 ${backgroundTint}`}></div>}

      {/* Dot Placement */}
      {dotPlacement &&
        dotPlacement.map(pos => (
          <div
            key={pos}
            className={`absolute ${getDotPosition(pos)} z-10 w-32 h-32 md:w-80 md:h-80 bg-contain bg-no-repeat`}
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
