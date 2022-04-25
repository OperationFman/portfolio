import useDeviceDetect from "../../../../../utils/useDeviceDetect";

type MobileBorderProps = {
    children: React.ReactNode;
  };

export const MobileBorder = (props: MobileBorderProps) => {
    const { children } = props;
    const { isMobile} = useDeviceDetect()

    return (
        <div style={{
            position: "absolute",
            right: isMobile ? "0" : "8%",
            top: "22%",
            height: "70%",
            width: isMobile ? "19%" : "16%",
            border: isMobile ? "4px solid #282424" : "5px solid #282424",
            borderRadius: "15px",
            backgroundColor: "#282424"
        }}>
            {children}
        </div>
    )
}