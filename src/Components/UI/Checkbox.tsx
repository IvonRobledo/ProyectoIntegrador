import React from "react";

type Props = {
    text: string,
    action: (e: React.MouseEvent<HTMLElement>) => void
};

const Checkbox = ({text, action}: Props) => {
    return(
        <div className="flex items-center mr-4">
            <input type="checkbox" id="checkbox" onClick={action} className="w-5 h-5 text-pink-600 bg-lgreen-100 rounded-lg border-gray-300 focus:ring-pink-500 focus:ring-2"/>
            <label htmlFor="checkbox" className="ml-2 text-base font-medium text-brown-900">{text}</label>
        </div>
    )
}

export default Checkbox;