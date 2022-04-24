type LaptopBorderProps = {
    children: React.ReactNode;
  };

export const LaptopBorder = (props: LaptopBorderProps) => {
    const { children } = props;
    
    return (
        <>
            <div style={
                {
                    border: "8px solid #282424", 
                    backgroundColor: "#282424",
                    borderRadius: "15px 15px 0px 0px",
                    margin: "0px 25px",
                    boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.22) 0px 10px 10px"
                }
            }>
            {children}
            </div>
            <div style={{
                border: "7px solid #282424",  
                borderRadius: "0px 0px 15px 15px ",
                boxShadow: "rgba(0, 0, 0, 0.25) 0px 14px 28px, rgba(0, 0, 0, 0.11) 0px 10px 10px"}}
            />
        </>
    )
}