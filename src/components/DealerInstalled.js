import OrderOption from "./OrderOption";

function DealerInstalled({ options, onChange }) {
    return (
        <div className="tile-holder">
            {options.map(orderOption => <OrderOption orderOption={orderOption} onChange={onChange} parentKey="dealerInstalled" />)}
        </div>
    );
}
export default DealerInstalled;