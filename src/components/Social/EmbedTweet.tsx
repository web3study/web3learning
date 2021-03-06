import React, {FC, useEffect} from "react";
import {useColorMode} from "@docusaurus/theme-common";

type EmbedTweetProps = {
    children: React.ReactNode;
};

export const EmbedTweet: FC<EmbedTweetProps> = ({children}) => {
    const isDark = useColorMode().colorMode === "dark";

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "https://platform.twitter.com/widgets.js";
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, [isDark]);

    return (
        <div>
            <blockquote
                className="twitter-tweet"
                data-theme={isDark ? "dark" : "light"}
                data-dnt="true"
            >
                {children}
            </blockquote>
        </div>
    );
};
