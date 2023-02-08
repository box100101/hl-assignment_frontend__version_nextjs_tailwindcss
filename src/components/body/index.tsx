"use client";
import React from "react";
import { getCookie, setCookies } from "cookies-next";
import { jokes, text } from "../../constants";
import Button from "../button";
import Divider from "../divider";

export type Props = {};

const Body: React.FC<Props> = () => {
  const [index, setIndex] = React.useState<any>(0);

  React.useEffect(() => {
    setIndex(getCookie("index") === undefined ? 0 : getCookie("index"));
  }, []);

  const handleOnClick = (): void => {
    setIndex(parseInt(index) + 1);
    setCookies("index", parseInt(index) + 1);
  };

  return (
    <>
      <div className="flex flex-col items-center">
        <div
          className="flex flex-col items-center justify-center w-screen h-[18rem] 
        bg-[var(--color-green)] gap-4"
        >
          <h3
            className="text-[length:var(--fs-5)] text-[color:var(--color-white)]
            font-medium max-[576px]:text-[1.8rem]"
          >
            {text.bodySection.textJokeTitle}
          </h3>
          <p className="text-[color:var(--color-white)] max-[576px]:text-[1.2rem]">
            {text.bodySection.textJokeDes}
          </p>
        </div>
        <div className="flex flex-col items-center h-auto w-screen bg-[var(--bgc-primary)]">
          {index >= 4 ? (
            <p
              className="flex items-center opacity-90 text-[length:var(--fs-3)] h-[200px]
              text-[color:var(--color-gray-2)]
              "
            >
              {text.bodySection.textMessage}
            </p>
          ) : (
            <>
              <div
                className="h-auto max-w-[var(--mw)] text-left mt-[80px] mb-[80px] text-[color:var(--color-gray-2)]
              opacity-90 text-[length:var(--fs-3)] mx-[2rem]"
              >
                {jokes[index]}
              </div>
              <Divider className="hidden sm:block" width="65%" />
              <div className="flex flex-col items-center">
                <div className="flex justify-center gap-[2rem] mb-[70px] mt-[40px]">
                  <Button
                    title={text.bodySection.textButtonFunny}
                    bgColor="blue"
                    onClickFunc={handleOnClick}
                  />
                  <Button
                    title={text.bodySection.textButtonNotFunny}
                    bgColor="green"
                    onClickFunc={handleOnClick}
                  />
                </div>
              </div>
            </>
          )}
          <Divider />
        </div>
      </div>
    </>
  );
};

export default Body;
