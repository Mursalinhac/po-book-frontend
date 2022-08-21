import OrderOption from "./OrderOption";


function FactoryInstalled({options, onChange}) {
    return (
        <div className="tile-holder">
            {Object.entries(options).map(([optionName, orderOption]) => <OrderOption orderOption={orderOption}
                                                                                   onChange={onChange}
                                                                                   parentKey="factoryInstalled"/>)}
        </div>
    );
}

export default FactoryInstalled;