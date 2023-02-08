// import "./styles.scss";
// import "./responsive.scss";
import logoCompany from "../../assets/images/hl-assignment-logocompany.png";
import avatarUser from "../../assets/images/hl-assignment-avatar.png";
import { text } from "../../constants";
import Image from "next/image";

export type Props = {};

const Header: React.FC<Props> = () => {
  return (
    <>
      <div className="flex justify-between items-center h-32 py-[1rem] px-[2rem]">
        <Image className="h-[6rem] w-[6rem] object-cover" src={logoCompany} alt="" />
        <div className="flex items-center gap-[0.5rem]">
          <div className="flex flex-col items-end">
            <p
              className="text-[color:var(--color-gray-1)] text-[length:var(--fs-1)] 
            opacity-90"
            >
              {text.headerSection.textInTop}
            </p>
            <p className="text-[length:var(--fs-1)] text-[color:var(--color-black)]">
              {text.headerSection.textInBottom}
            </p>
          </div>
          <Image
            className="h-[4.5rem] w-[4.5rem] object-contain"
            src={avatarUser}
            alt=""
          />
        </div>
      </div>
    </>
  );
};

export default Header;
