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
                    
                }
            }>
            {children}
            </div>
            <div style={{
                border: isMobile ? "4px solid #282424" : "7px solid #282424",  
                backgroundColor: "#282424",
                borderRadius: isMobile ? "0px 0px 8px 8px" : "0px 0px 15px 15px",
                boxShadow: "rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px"
            }}
            />
        </div>
    )
}