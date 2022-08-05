import React from "react";

type AuthorItem = {
    title: string;
    href: string;
    description: string;
    imageUrl: string;
};


// 主页ens介绍
export default function Nav({children}) {
    const navList: AuthorItem[] = require('' + children);
    console.log('' + children)
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center', gap: '10px'}}>
            {navList.map((collection, index) => (
                <div key={index}>
                    <a href={collection.href}>
                        <img src={collection.imageUrl} style={{width: '100px', height: '100px'}}/>
                        <p>{collection.title}</p>
                    </a>
                </div>
            ))}
        </div>
    );
}
