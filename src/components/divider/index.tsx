// import "./styles.scss";

export type Props = {
    width?: string;
    className?: string;
};

const Divider: React.FC<Props> = ({ width, className }) => {
    return (
        <>
            <div
                className={`divider__wrapper ${className ? className : ""}`}
                style={{ width: width }}
            ></div>
        </>
    );
};

export default Divider;
