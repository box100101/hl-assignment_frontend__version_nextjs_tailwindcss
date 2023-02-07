// import "./styles.scss";
// import "./responsive.scss";

export type Props = {
    title: string;
    bgColor: string;
    onClickFunc: () => void;
};

const Button: React.FC<Props> = ({ title, bgColor, onClickFunc }) => {
    return (
        <>
            <button
                className={`btn__wrapper ${bgColor ? bgColor : ""}`}
                onClick={onClickFunc}
            >
                {title}
            </button>
        </>
    );
};

export default Button;
