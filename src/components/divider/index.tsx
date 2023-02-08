// import "./styles.scss";

export type Props = {
  width?: string;
  className?: string;
};

const Divider: React.FC<Props> = ({ width, className }) => {
  return (
    <>
      <div
        className={`${
          className ? className : ""
        } w-[100%] h-px bg-[var(--color-gray-3)]`}
        style={{ width: width }}
      ></div>
    </>
  );
};

export default Divider;
