import useDeviceDetect from "../../../../../utils/useDeviceDetect";

type LaptopBorderProps = {
    children: React.ReactNode;
  };

export const LaptopBorder = (props: LaptopBorderProps) => {
    const { children } = props;
    const { isMobile} = useDeviceDetect()

    return (
        <div style={ isMobile ? {} : {
            margin: "0px 100px"
        }}>
            <div style={
                {
                    border: isMobile ? "5px solid #282424" : "8px solid #282424", 
                    backgroundColor: "#282424",
                    borderRadius: isMobile ? "8px 8px 0px 0px" : "15px 15px 0px 0px",
                    margin: "0px 25px",
                    minHeight: "180px",
                    boxShadow: "rgba(17, 17, 26, 0.1) 0px 1px 0px, rgba(17, 17, 26, 0.1) 0px 8px 24px, rgba(17, 17, 26, 0.1) 0px 16px 48px"
                }
            }>
            {children}
            </div>
            <div style={{
                border: isMobile ? "4px solid #484848" : "7px solid #484848",  
                backgroundColor: "#484848",
                borderRadius: isMobile ? "0px 0px 8px 8px" : "0px 0px 15px 15px"
            }}
            />
        </div>
    )
}