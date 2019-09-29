import deezerImage from '../../../images/deezer.png';

export const styles = {
    paper:{
        height: '100%',
        width:'100%'
    },
    gridContainer: {
        height:'100%',
    },
    gridItemA:{
        height: '100%',
    },
    imgFull:{
        height:'100%',
        width: '25%',
        backgroundImage:`url(${deezerImage})`,
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    gridItemB:{
        height: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        padding: '0px 5px 0px 5px',
    },
    gridItemC:{
        height: '100%',
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
    },
    buttonA:{
        position:'relative',
        height: '100%',
        width: '100%',
        '&:before':{
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            borderBottom: 'solid #0b66cd',
            transform: 'scaleX(0)',
            transition: 'transform .3s ease-in-out',
        },
        '&:hover:before': {
            transform: 'scaleX(1)',
        },
    },
    buttonB:{
        position:'relative',
        borderRadius:'30px',
        border:'solid 2px'
    },
}