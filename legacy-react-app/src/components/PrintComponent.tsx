import React, { useRef } from "react";
import { Button } from "./ui/button";
import ReactToPrint from "react-to-print";
import PrintPreview from "./PrintPreview";
import { PrintComponentProps, OrderData } from '../types';
import '../css/print.css';

interface ComponentToPrintProps {
    order: OrderData;
}

class ComponentToPrint extends React.Component<ComponentToPrintProps> {
    render() {
        return (
            <PrintPreview order={this.props.order}/>
        );
    }
}

const PrintComponent: React.FC<PrintComponentProps> = ({ order }) => {
    const componentRef = useRef<ComponentToPrint>(null);
    return (
        <>
            <div>
                {/* button to trigger printing of target component */}
                <ReactToPrint
                    trigger={() => <Button variant="outline" size="sm" className="po-book-button">Print</Button>}
                    content={() => componentRef.current}
                    pageStyle="@page { size: auto; margin: 10mm; }"
                />

                <Button variant="outline" size="sm" className="po-book-button ml-2">Save</Button>

                <div style={{display: "none"}}>
                    <ComponentToPrint ref={componentRef} order={order}/>
                </div>
            </div>
        </>
    );
};

export default PrintComponent;