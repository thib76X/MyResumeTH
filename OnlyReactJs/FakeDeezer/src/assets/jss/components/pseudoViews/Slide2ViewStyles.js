import slidePhone from "../../../images/slidePhone.png";

export const styles = {
    gridContainer:{
        height:'100%',
        width:'100%'
    },
    gridItemLeft:{
        height:'100%',
        display:'flex',
        justifyContent:'space-evenly',
        alignItems:'center',
        flexDirection:'column',
        paddingLeft:'5px'
    },
    gridItemRight:{
        height:'100%',
        backgroundImage:`url(${slidePhone})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'auto',
    }
}