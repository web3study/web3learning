import React, { FC, useEffect } from "react";
import { useColorMode } from "@docusaurus/theme-common";
import GitalkComponent from "gitalk/dist/gitalk-component";
import 'gitalk/dist/gitalk.css'

type EmbedTweetProps = {
  children: React.ReactNode;
};

export const EmbedTweet: FC<EmbedTweetProps> = ({ children }) => {
  const { isDarkTheme } = useColorMode();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, [isDarkTheme]);

  return (
    <div>
      <blockquote
        className="twitter-tweet"
        data-theme={isDarkTheme ? "dark" : "light"}
        data-dnt="true"
      >
        {children}
      </blockquote>
      <GitalkComponent options={{
        clientID: "6d9d3c75273d743d6d06",
        clientSecret: '15aae6d0e411f13b295bae6b2f820722ea2a308c',
      }} />
    </div>
  );
};
