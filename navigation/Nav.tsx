import React from "react";

type Nullable<T> = T | null;

type AuthorItem = {
  title: string;
  href: string;
  description: string;
  imageUrl: string;
};

const navList: AuthorItem[] = require("./navList.json");

// 主页ens介绍
export default function Nav() {
  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', textAlign: 'center', gap: '10px' }}>
      {navList.map((collection, index) => (
        <div key={index}>
          <a href={collection.href}>
            <img src={collection.imageUrl} style={{ width: '100px', height: '100px' }} />
            <p>{collection.title}</p>
          </a>
        </div>
      ))}
    </div>
  );
}
