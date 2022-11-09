import React from "react";

type Props = {
    text: string,
    action: (e: React.MouseEvent<HTMLElement>) => void
};

const MainButton = ({text, action}: Props) => {
    return(
        <button className="bg-pink-500 w-full py-2 my-2 rounded-xl border-pink-800 shadow-pink-300 text-lg text-center tracking-widest text-white hover:bg-pink-700" onClick={(e) => action(e)}>
            {text}
        </button>
    )
}


export default MainButton;