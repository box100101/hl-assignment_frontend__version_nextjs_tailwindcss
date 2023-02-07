import { text } from "../../constants";
// import "./styles.scss";
// import "./responsive.scss";
import Divider from "../divider";

export type Props = {};

const Footer: React.FC<Props> = () => {
    return (
        <>
            <footer className="footer__wrapper">
                <p className="footer__des">{text.footerSection.textDesWebsite}</p>
                <p className="footer__copyright">
                    {text.footerSection.textCopyright}
                </p>
                <Divider className="footer__divider"/>
            </footer>
        </>
    );
};

export default Footer;
