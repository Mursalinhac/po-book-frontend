import OptionPreview from "./OptionPreview";

const InstallationPreview = ({options, title}) => {
    return (
        <>
        <tr><h3>{title}</h3></tr>
            {Object.entries(options).map(([, option]) => (<OptionPreview option={option}/>))}
        </>
    )
}

export default InstallationPreview;