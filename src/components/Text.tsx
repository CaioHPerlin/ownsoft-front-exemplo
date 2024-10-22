type TextProps = {
  style?: string;
  children: React.ReactNode;
};

class Text {
  public static Title: React.FC<TextProps> = ({ style = '', children }) => {
    return <h1 className={`font-bold text-4xl text-center ${style}`}>{children}</h1>;
  };

  public static H1: React.FC<TextProps> = ({ style = '', children }) => {
    return <h1 className={`font-bold text-3xl text-center ${style}`}>{children}</h1>;
  };

  public static H2: React.FC<TextProps> = ({ style = '', children }) => {
    return <h2 className={`font-bold text-2xl text-center ${style}`}>{children}</h2>;
  };

  public static P: React.FC<TextProps> = ({ style = '', children }) => {
    return <p className={`font-normal text-xl text-center ${style}`}>{children}</p>;
  };
}

export default Text;
