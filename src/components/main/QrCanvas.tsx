import QRCode from "react-qr-code";

const QrCanvas = ({ value = "" }: { value: string }) => {
    if (!value || value.length <= 0)
        return (
            <p className='text-2xl font-semibold text-red-600 animate-pulse'>
                No value provided...
            </p>
        );

    return <QRCode value={value} />;
};

export default QrCanvas;
