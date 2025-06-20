import React from 'react';

const OptionPreview = ({option}) => {
    return Object.keys(option.selected).length ?
        <>
            <tr>
                <td colSpan={4} className="font-semibold text-white bg-gray-800 px-2 py-1">
                    {option.title}
                </td>
            </tr>
            {
                option.selectType === "multi" ? Object.entries(option.selected).map(([key, selection], index) => (
                    <tr key={`${option.title}-${key}-${index}`}>
                        <td></td>
                        <td>{selection.code}</td>
                        <td>{selection.title}</td>
                        <td className="price-cell">${selection.price}</td>
                    </tr>
                )) : (
                    <tr key={`${option.title}-single`}>
                        <td></td>
                        <td>{option.selected.code}</td>
                        <td>{option.selected.title}</td>
                        <td className="price-cell">${option.selected.price}</td>
                    </tr>
                )
            }
        </> : null;
}

export default OptionPreview;