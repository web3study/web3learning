import React from "react";
import Link from "@docusaurus/Link";

type Nullable<T> = T | null;

type CollectionItem = {
  title: string;
  href: string;
  description: string;
  tier: Nullable<number>;
  imageUrl: string;
};

const CollectionList: CollectionItem[] = require("./collections.json");

export default function Collections() {
  return (
    <div className="lg:col-span-3">
      <h2 className="sr-only">Collections</h2>
      <div className="mx-auto scroll-smooth hover:scroll-auto overflow-hidden">
        <div className="relative w-auto flex gap-3 snap-x snap-proximity lg:rounded-2xl overflow-x-scroll pl-3 lg:pl-0 no-scrollbar">
          {/* Individual collection */}
          {CollectionList.map((collection) => (
            <Link
              to={collection.href}
              className="scroll-ml-12 scroll-mr-6 snap-always  snap-mandatory snap-start last:mr-12 shrink-0 flex flex-col rounded-xl md:rounded-2xl overflow-hidden  group"
              key={collection.title}
            >
              <div className="relative w-60 sm:w-64 lg:w-72 aspect-[4/5] bg-black/50 rounded-xl md:rounded-2xl">
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
                        {collection.title}
                      </p>
                      <div className="flex justify-between mt-1">
                        <div className="text-xs font-bold uppercase leading-6 grow-0 truncate">
                          {collection.description}
                        </div>
                        <div className="shrink-0">
                          {collection.tier ? (
                            <div className="rounded-lg text-xs leading-6 px-2 uppercase font-semibold text-white bg-pink-500 group-hover:bg-white group-hover:text-pink-500 transition-all duration-300">
                              Plate {collection.tier}
                            </div>
                          ) : (
                            ""
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}

          {/* Hack for full-width */}
          <div className="snap-end shrink-0 lg:hidden">
            <div className="shrink-0 w-1 "></div>
          </div>
        </div>
      </div>
    </div>
  );
}
