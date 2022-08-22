import OptionPreview from "./OptionPreview";

const InstallationPreview = ({options, title}) => {
    return (
        <>
        <tr><h2>{title}</h2></tr>
            {Object.entries(options).map(([, option]) => (<OptionPreview option={option}/>))}
        </>
    )
}

export default InstallationPreview;