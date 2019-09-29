import slide1 from "../../../images/slide1.png";

export const styles = {
    gridContainer:{
        height:'100%',
    },
    gridItem:{
        height: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        flexDirection:'column',
        paddingLeft:'5px'
    },
    gridItemVoid:{
        height:'100%',
        backgroundImage:`url(${slide1})`,
        backgroundPosition: 'right',
        backgroundRepeat: 'repeat-y',
        backgroundSize: 'auto',
    },
    buttonA:{
        borderRadius:'30px',
        margin:'10px'
    }
}