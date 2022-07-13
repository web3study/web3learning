import React from "react";
// 首页顶部
export default function Introduce() {
  return (
    <section className="relative">
      <div className="relative sm:overflow-hidden">
        <div className="relative px-4 py-4 md:py-8 sm:px-6 lg:px-8 ">
          <div className="mx-auto max-w-7xl px-4">
            <div className="lg:grid lg:grid-cols-12 lg:gap-8">
              <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                <h1>
                  <span className="block text-base uppercase tracking-wide sm:text-xl xl:text-3xl ">
                    欢迎━(*｀∀´*)ノ亻!
                  </span>
                  <span className=" block text-4xl font-bold sm:text-5xl xl:text-6xl">
                    Web3 Study
                  </span>
                </h1>
                <p className="pt-1 text-base sm:pt-3 sm:text-xl lg:text-lg xl:text-xl">
                  Web3 学习授课，旨在便于同学们学习、汇总、记录、使用平台，指向一个全新的学习汇总导航
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

