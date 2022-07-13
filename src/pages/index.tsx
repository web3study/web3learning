import React from "react";
import Layout from "@theme/Layout";
import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import LayoutTw from "@site/src/theme/LayoutTw";

import Introduce from "../components/Homapage/Introduce";
import Tutorial from "../components/Homapage/Tutorial";
import Collections from "../components/Homapage/Collections";
import Learn3 from "../components/Homapage/Learn3";
import Share from "../components/Homapage/Share";
import Posts from "../components/Homapage/Posts";
// 首页全部内容
export default function Home() {
  const { siteConfig } = useDocusaurusContext();
  return (
    <Layout
      title={`Welcome to ${siteConfig.title}`}
      description="A place to learn and find information about Web3"
    >
      <LayoutTw>
        <Introduce />
        <main className="pt-0">
          <section className="relative max-w-7xl mx-auto lg:grid grid-cols-1 lg:grid-cols-5 gap-3 lg:px-3">
            <Tutorial />
            <Collections />
          </section>
          <Posts />
          <Learn3 />
          <Share />
        </main>
      </LayoutTw>
    </Layout>
  );
}
