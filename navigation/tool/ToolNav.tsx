import React from "react";

type AuthorItem = {
    title: string;
    href: string;
    description: string;
    imageUrl: string;
};

const navList: AuthorItem[] = require("./navList.json");

// 主页ens介绍
export default function ToolNav() {
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center', gap: '10px'}}>
            {navList.map((collection, index) => (
                <div style={{padding: '10px', backgroundColor: '#eeeeee', borderRadius: '10px'}}>
                    <a href={collection.href}>
                        <div key={index}>
                            <img src={collection.imageUrl} style={{width: '100px', height: '100px'}}/>
                            <div style={{marginTop: '10px'}}>{collection.title}</div>
                            <div style={{marginTop: '10px',fontSize:'10px'}}>{collection.description}</div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}
