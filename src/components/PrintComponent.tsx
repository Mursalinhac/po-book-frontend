import React, { useRef } from "react";
import dynamic from "next/dynamic";
import { Button } from "./ui/button";
import { useReactToPrint } from "react-to-print";
import { PrintComponentProps } from '../types';
import '../css/print.css';

// Dynamic import for PrintPreview (only needed when printing)
const PrintPreview = dynamic(() => import("./PrintPreview"), {
  loading: () => <div className="flex items-center justify-center p-4 bg-white"><div className="text-gray-600">Loading Print Preview...</div></div>
});

const PrintComponent: React.FC<PrintComponentProps> = ({ order }) => {
    const contentRef = useRef<HTMLDivElement>(null);

    const handlePrint = useReactToPrint({
        contentRef,
        pageStyle: "@page { size: auto; margin: 10mm; }"
    });

    return (
        <>
            <div>
                {/* button to trigger printing of target component */}
                <Button
                    variant="outline"
                    size="sm"
                    className="po-book-button"
                    onClick={handlePrint}
                >
                    Print
                </Button>

                <Button variant="outline" size="sm" className="po-book-button ml-2">Save</Button>

                <div style={{display: "none"}}>
                    <div ref={contentRef}>
                        <PrintPreview order={order}/>
                    </div>
                </div>
            </div>
        </>
    );
};

export default PrintComponent;