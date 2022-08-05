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
export const NftNav2: FC<NftNavProps> = ({children}) => {
    const navList: AuthorItem[] = require('' + children);
    return (
        <div style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
            {navList.map((collection, index) => (
                <div key={index}
                     style={{padding: '20px', backgroundColor: '#eeeeee22', borderRadius: '10px', width: '400px'}}>
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
