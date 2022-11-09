import React from "react";

type Props = {
    text: string,
    action: (e: React.ChangeEvent<HTMLElement>) => void
};

const MainInput = ({text, action}: Props) => {
    return(
        <div className="flex items-center mr-4">
            <input type="text" placeholder={text} onChange={action} className="w-full text-xl px-2 py-1 bg-white rounded-md border-pink-300 focus:border-pink-300"/>
        </div>
    )
}

export default MainInput;