import OptionPreview from "./OptionPreview";

const InstallationPreview = ({options, title}) => {
    return (
        <>
            <h3>{title}</h3>
            {Object.entries(options).map(([, option]) => (<OptionPreview option={option}/>))}
        </>
    )
}

export default InstallationPreview;