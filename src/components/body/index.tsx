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
            <div className="body__wrapper">
                <div className="body__joke-header">
                    <h3 className="body__joke-header__title">
                        {text.bodySection.textJokeTitlel}
                    </h3>
                    <p className="body__joke-header__des">
                        {text.bodySection.textJokeDes}
                    </p>
                </div>
                <div className="body__joke-body">
                    {index >= 4 ? (
                        <p className="body__joke-message">
                            {text.bodySection.textMessage}
                        </p>
                    ) : (
                        <>
                            <div className="body__joke-content">{jokes[index]}</div>
                            <Divider
                                className="body__joke-content__divider"
                                width="65%"
                            />
                            <div className="body__joke-action">
                                <div className="body__joke-action__container">
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
                </div>
                <div className="body__joke-footer">
                    <Divider />
                </div>
            </div>
        </>
    );
};

export default Body;
