import React from "react";

type AuthorItem = {
    title: string;
    href: string;
    description: string;
    imageUrl: string;
};


export default function DevNav() {
    const navList: AuthorItem[] = require("./navList.json");
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center', gap: '10px'}}>
            {navList.map((collection, index) => (
                <div style={{padding: '10px', backgroundColor: '#eeeeee22', borderRadius: '10px'}}>
                    <a href={collection.href}>
                        <div key={index} style={{width: '120px'}}>
                            <img src={collection.imageUrl} style={{width: '100px', height: '100px'}}/>
                            <div style={{marginTop: '10px'}}>{collection.title}</div>
                            <div style={{marginTop: '10px', fontSize: '10px'}}>{collection.description}</div>
                        </div>
                    </a>
                </div>
            ))}
        </div>
    );
}
