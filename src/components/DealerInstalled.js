import OrderOption from "./OrderOption";

function DealerInstalled({options, onChange}) {
    return (
        <div className="tile-holder">
            {Object.entries(options).map(([optionName, orderOption]) => <OrderOption orderOption={orderOption}
                                                                                   onChange={onChange}
                                                                                   parentKey="dealerInstalled"/>)}
        </div>
    );
}

export default DealerInstalled;