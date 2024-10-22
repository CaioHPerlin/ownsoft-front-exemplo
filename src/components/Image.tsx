type ImageProps = {
  src: string;
  alt: string;
  className?: string;
  width?: string;
  height?: string;
};

const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className = '',
  width = '100%',
  height = 'auto',
}) => {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <img src={src} alt={alt} style={{ width, height }} className="object-cover w-full h-auto" />
    </div>
  );
};

export default Image;
