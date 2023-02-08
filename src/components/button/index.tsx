import "./styles.css";

export type Props = {
  title: string;
  bgColor: string;
  onClickFunc: () => void;
};

const Button: React.FC<Props> = ({ title, bgColor, onClickFunc }) => {
  return (
    <>
      <button
        className={`btn ${
          bgColor ? bgColor : ""
        } border-none outline-none text-[color:var(--color-white)] 
        text-[length:var(--fs-2)] sm:h-[3.5rem] sm:w-[18rem] 
        zero:h-[3rem] zero:w-[12.5rem]`}
        onClick={onClickFunc}
      >
        {title}
      </button>
    </>
  );
};

export default Button;
