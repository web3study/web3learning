import React, { FC } from "react";
import GitalkComponent from "gitalk/dist/gitalk-component";
import 'gitalk/dist/gitalk.css'

type EmbedGitalkProps = {
  children: React.ReactNode;
};

export const EmbedGitalk: FC<EmbedGitalkProps> = ({ children }) => {
  return (
    <div>
      <GitalkComponent options={{
        clientID: "6d9d3c75273d743d6d06",
        clientSecret: '15aae6d0e411f13b295bae6b2f820722ea2a308c',
      }} />
    </div>
  );
};
