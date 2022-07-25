import React from "react";

type AuthorItem = {
    title: string;
    href: string;
    description: string;
    imageUrl: string;
};

const navList: AuthorItem[] = require("./navList.json");

// 主页ens介绍
export default function NftNav() {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center', gap: '10px'}}>
            {navList.map((collection, index) => (
                <div key={index} style={{padding: '10px', backgroundColor: '#eeeeee22',width:'200px'}}>
                    <a href={collection.href} target={"_blank"}>
                        <img src={collection.imageUrl} style={{width: '100px', height: '100px'}}/>
                        <div>{collection.title}</div>
                        <div style={{fontSize: '10px'}}>{collection.description}</div>
                    </a>
                </div>
            ))}
        </div>
    );
}
