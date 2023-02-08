import { text } from "../../constants";
// import "./styles.scss";
// import "./responsive.scss";
import Divider from "../divider";

export type Props = {};

const Footer: React.FC<Props> = () => {
  return (
    <>
      <footer className="h-auto pt-[40px] pb-[40px] text-center max-[576px]:py-[20px]">
        <p
          className="text-[length:var(--fs-1)] text-[color:var(--color-gray-2)] opacity-60
        max-[992px]:px-[2rem]
        "
        >
          {text.footerSection.textDesWebsite}
        </p>
        <p
          className="mt-[30px] text-[length:var(--fs-2)] text-[color:var(--color-gray-2)]
        max-[576px]:mt-[10px] max-[576px]:mb-[6px]
        "
        >
          {text.footerSection.textCopyright}
        </p>
        <Divider className="block sm:hidden" />
      </footer>
    </>
  );
};

export default Footer;
