import React, {FC} from "react";

type AuthorItem = {
    title: string;
    href: string;
    description: string;
    imageUrl: string;
};

type NftNavProps = {
    children: React.ReactNode;
};

export const NftNav: FC<NftNavProps> = ({children}) => {
    const navList: AuthorItem[] = require('' + children);
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', textAlign: 'center', gap: '10px'}}>
            {navList.map((collection, index) => (
                <div key={index}
                     style={{
                         margin: '0 auto',
                         padding: '10px',
                         backgroundColor: '#eeeeee22',
                         borderRadius: '10px',
                         width: '160px'
                     }}>
                    <a href={collection.href} target={"_blank"}>
                        <img src={collection.imageUrl} style={{width: '80px', height: '80px'}}/>
                        <div style={{marginTop: '10px', fontSize: '18px'}}>{collection.title}</div>
                        <div style={{fontSize: '10px'}}>{collection.description}</div>
                    </a>
                </div>
            ))}
        </div>
    );
}
