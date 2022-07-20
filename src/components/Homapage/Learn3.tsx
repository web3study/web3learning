import React, { useState } from "react";
import styles from "./learn3.module.scss";
import Link from "@docusaurus/Link";
import copy from "copy-to-clipboard";

type Nullable<T> = T | null;

type AuthorItem = {
  name: string;
  title: string;
  href: string;
  description: string;
  imageUrl: string;
};

const AuthorList: AuthorItem[] = require("./authors.json");
// 主页ens介绍
export default function Learn3() {
  const copytext = () => {
    copy('0x236BE5490b1e21c83771a37820a25cF3c7c7c26B');
    setIsMessage(true)
    this.timer = setInterval(() => {
      setIsMessage(false)
    }, 1000);
  };
  const [isMessage, setIsMessage] = useState<boolean>(false);
  return (
    <section>
      <div style={{ backgroundImage: 'url(img/bac555.png)' }}
        className={"relative bg-fixed bg-center my-8 md:my-12 group " + styles.sectionBg}>
        <div className="absolute inset-0 w-full h-full">
          <img
            className={"w-full h-full object-cover " + styles.coverImg}
            src="/img/home/learn-bg.png"
            alt=""
          />
        </div>

        <div
          className={
            "absolute w-full top-0 h-4 p-3 transition-all duration-150 bg-gradient-to-b " +
            styles.overlay
          }
        />
        <div
          className={
            "absolute w-full bottom-0 h-4 p-3 transition-all duration-150 bg-gradient-to-t " +
            styles.overlay
          }
        />
        <div
          className={
            "absolute w-full top-0 h-24 group-hover:animate-pulse group-hover:h-16 p-3 transition-all duration-150 bg-gradient-to-b " +
            styles.overlay
          }
        />
        <div
          className={
            "absolute w-full bottom-0 h-24 group-hover:animate-pulse group-hover:h-16 p-3 transition-all duration-150 bg-gradient-to-t " +
            styles.overlay
          }
        />

        <div className="relative max-w-4xl mx-auto text-center py-16 lg:py-24 px-8 sm:px-12 lg:px-3">
          <div>
            <h3 className="text-3xl md:text-5xl uppercase pb-4 tracking-widest">
              欢迎加入web3大家庭
              <span className="block pt-1 text-xl md:text-3xl tracking-normal font-light">
                一起共建
              </span>
            </h3>
            <div className="text-base sm:text-xl lg:text-lg xl:text-xl">
              <p>我们想打造一个较为完备web3学习体系，先以eth为基础进行发散，后续会加入更多的模块，也欢迎大家一起来建造</p>
              <p>
                你憧憬未来的时候，不能预先把所有点点滴滴的事联系起来；唯有未来你在回忆过去的时候，你才是会明白那些点点滴滴是如何联系在一起的
              </p>
            </div>
            <div className="pt-8">
              <Link to="/aboutus">
                <span className="inline-block px-6 py-3 rounded-full bg-blue-500 hover:bg-white hover:shadow-lg hover:shadow-blue-500 text-base font-medium text-white hover:text-blue-500 transition-all duration-300 hover:-translate-y-1">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>


      <div className="relative max-w-5xl mx-auto text-center py-5 lg:px-8 sm:px-12 lg:px-3">
        <span className="text-blue-500">
          <a target='blank' href='https://etherscan.io/address/0x236BE5490b1e21c83771a37820a25cF3c7c7c26B'>
            捐赠地址: 0x236BE5490b1e21c83771a37820a25cF3c7c7c26B</a>
        </span>
        {isMessage && (
          <span className="m-4">复制成功</span>
        )}
        <div className="pt-8">
          <button onClick={() => copytext()} className="inline-block px-6 py-3 rounded-full bg-blue-500 hover:bg-white hover:shadow-lg hover:shadow-blue-500 text-base font-medium text-white hover:text-blue-500 transition-all duration-300 hover:-translate-y-1">
            复制
          </button>
        </div>
      </div>

      <div className="relative max-w-6xl mx-auto text-center py-16 lg:py-24 sm:px-12 lg:px-3">
        <div className="relative flex flex-wrap lg:justify-center content-center lg:rounded-2xl lg:pl-0">
          {/* Individual collection */}
          {AuthorList.map((collection) => (
            <Link
              to={collection.href}
              className="shrink-0 flex my-3 flex-col rounded-xl md:rounded-2xl overflow-hidden group w-2/4 lg:w-1/4"
              key={collection.title}
            >
              <div className="relative w-40 sm:w-40 lg:w-60 aspect-[4/5] bg-black/50 rounded-xl md:rounded-2xl mx-auto">
                {/* Inset Collection image */}
                <div className="absolute inset-0">
                  <img
                    className="w-full object-cover snap-start opacity-80 group-hover:opacity-100 transition-all duration-300 rounded-xl md:rounded-2xl"
                    src={collection.imageUrl}
                    alt=""
                  />
                </div>

                {/* Collection description */}
                <div className="absolute w-full bottom-0 p-3 flex gap-2 flex-col bg-gradient-to-b from-black/0 via-black/50 to-black/60 group-hover:from-black/0 group-hover:via-amber-800/50 group-hover:to-amber-800/75 text-white rounded-xl md:rounded-2xl">
                  <div className="flex-1">
                    <div className="block">
                      <p className="text-base sm:text-lg font-bold uppercase truncate pt-8">
                        {collection.name}</p>
                      <p className="text-base sm:text-lg font-bold uppercase truncate pt-8">
                        {collection.title}
                      </p>
                      <div className="flex justify-between mt-1">
                        <div className="text-xs font-bold uppercase leading-6 grow-0 truncate">
                          {collection.description}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

        </div>
      </div>
    </section >
  );
}
