const qrBaseUrl = "https://api.qrserver.com/v1/create-qr-code/";
export const QRCodeGenerator = ( qrData , qrSize ) => {
    const qrImageUrl = `${qrBaseUrl}?data=${encodeURIComponent(qrData)}&size=${qrSize}`;
    return qrImageUrl;

}