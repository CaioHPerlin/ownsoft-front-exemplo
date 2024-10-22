type ButtonTheme = 'primary' | 'secondary' | 'tertiary';

type ButtonProps = {
  onClick?: () => void;
  theme?: ButtonTheme;
  style?: string;
  children?: React.ReactNode;
};

const Button: React.FC<ButtonProps> = ({ onClick, theme = 'primary', style = '', children }) => {
  const getStyle = (theme: ButtonTheme) => {
    switch (theme) {
      case 'primary':
        return 'bg-white hover:bg-blue-600 text-hero-blue hover:text-white';
      case 'secondary':
        return 'bg-none text-white border-white border hover:bg-white hover:text-hero-blue text-hero-blue';
      case 'tertiary':
        return 'bg-blue-600 hover:bg-blue-700 text-white';
    }
  };

  const themeStyle = getStyle(theme);

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 ${themeStyle} rounded transition duration-150  ${style}`}
      aria-label="Access the system"
    >
      {children}
    </button>
  );
};

export default Button;
