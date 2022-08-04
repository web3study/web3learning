import React from "react";

type AuthorItem = {
    title: string;
    href: string;
    description: string;
    imageUrl: string;
};

const navList: AuthorItem[] = require("./navList2.json");

// 主页ens介绍
export default function NftNav() {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
            {navList.map((collection, index) => (
                <div key={index} style={{padding: '10px', backgroundColor: '#eeeeee22',width:'400px'}}>
                    <a href={collection.href} target={"_blank"}>
                        <img src={collection.imageUrl} style={{width: '400px', height: '200px'}}/>
                        <div>{collection.title}</div>
                        <div style={{fontSize: '14px'}}>{collection.description}</div>
                    </a>
                </div>
            ))}
        </div>
    );
}
