import React from "react";
import { Category }  from "../../Context/Types";

type Props = {
    text: string,
    options: Category[] | undefined
    action: (e: React.ChangeEvent<HTMLElement>) => void
};

const DropDown = ({text, options, action}: Props) => {
    return(
        <div className="flex items-center mr-4 w-[250px]">
            <select onChange={action} className="w-full text-xl px-2 py-1 bg-white rounded-md border-pink-300 focus:border-pink-300">
                <option value="">{text}</option>
                {
                    options !== undefined && options !== null && options.length > 0 ?
                    options.map((option) => {
                        return <option key={option.category} value={option.category}>{option.category}</option>
                    })
                    :
                    ''
                }
            </select>
        </div>
    )
}

export default DropDown;