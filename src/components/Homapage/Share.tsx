import React from "react";
import Link from "@docusaurus/Link";
// 主页底部介绍
export default function Share() {
  return (
    <section className="relative my-8 md:my-12">
      <div className="relative max-w-xl mx-auto px-8 md:max-w-5xl ">
        <div className="relative sm:grid md:grid-cols-2 lg:gap-8 lg:items-center bg-slate-500/10 hover:bg-slate-500/20 rounded-3xl px-8 py-8 md:py-12 group transition-all duration-300">
          <div
            className="mb-4 md:mb-0 relative lg:mt-0 items-center"
            aria-hidden="true"
          >
            <img
              className="relative mx-auto my-auto w-[200px] sm:w-[250px] md:w-[300px] lg:w-[350px] xl:w-[400px] group-hover:animate-pulse"
              src="/img/bac333.png"
              alt=""
            />
          </div>

          <div className="relative">
            <h3 className="text-center md:text-left text-3xl md:text-5xl uppercase pb-4">
              共享资源、提问区
            </h3>
            <p className="mt-6 text-center md:text-left text-base sm:text-xl lg:text-lg xl:text-xl">
              平台主要会以共享资源为主，开设github的提交权限，大家可以提交相关模块的内容，收到后会对内容进行fork并更新
            </p>
            <p className="pt-2 text-center md:text-left text-base sm:text-xl lg:text-lg xl:text-xl font-bold">
              我们也会持续搬运、或者编写新的文章来提供给大家学习，大家可以对于开发过程中发现的问题进行提问
            </p>
            <p className="opacity-50 text-center md:text-left text-sm font-bold">
              当然，你们看到的一些都是免费的
            </p>
            <div className="block pt-8 pb-4 md:pb-0 text-center md:text-left">
              <Link to="/aboutus">
                <span className="inline-block px-6 py-3 rounded-full bg-pink-500 hover:bg-white hover:shadow-lg hover:shadow-pink-500 text-base font-medium text-white hover:text-pink-500 transition-all duration-300 hover:-translate-y-1">
                  Learn More
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
