import React, {FC, useEffect, useRef} from "react";
import {useColorMode} from "@docusaurus/theme-common";

type EmbedGiscusProps = {
    children: React.ReactNode;
};

export const EmbedGiscus: FC<EmbedGiscusProps> = ({children}) => {
    const containerRef = useRef(null);
    const theme = useColorMode().colorMode
    const isDark = theme === "dark"
    useEffect(() => {
        const createUtterancesEl = () => {
            const script = document.createElement('script');
            script.src = 'https://giscus.app/client.js';
            script.setAttribute('data-repo', 'web3study/web3learning');
            script.setAttribute('data-repo-id', 'R_kgDOHprWRw');
            script.setAttribute('data-category', 'General');
            script.setAttribute('data-category-id', 'DIC_kwDOHprWR84CQYdT');
            script.setAttribute('data-term', '' + children);
            script.setAttribute('data-mapping', 'specific');
            script.setAttribute('data-theme', '' + theme);
            script.setAttribute('data-lang', 'zh-CN');
            script.crossOrigin = 'anonymous';
            script.async = true;
            containerRef.current.appendChild(script);
        };
        createUtterancesEl();
    }, [isDark]);
    return <div ref={containerRef}/>;
}
