import OrderOption from "./OrderOption";


function FactoryInstalled({options, onChange}) {
    return (
        <div className="tile-holder">
                {options.map(orderOption => <OrderOption orderOption={orderOption} onChange={onChange} parentKey="factoryInstalled"/>)}
        </div>
    );
}

export default FactoryInstalled;