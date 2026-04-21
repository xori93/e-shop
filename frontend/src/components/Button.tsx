type ButtonProps = {
  text: string;
};

const Button = ({ text }: ButtonProps) => {
  return (
    <button type="submit" className="w-full bg-black text-white p-3 rounded-lg">
      {text}
    </button>
  );
};

export default Button;