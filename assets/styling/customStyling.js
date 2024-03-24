import { StyleSheet } from "react-native";

export const customStyles = StyleSheet.create({
    container: {
        flex: 1
    },
    activityInd: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    switchCamera:{
        height: 40,
        width: 40,
        borderRadius: 30,
        borderWidth: 1,
        backgroundColor:"lightgrey",
        borderColor: 'white',
        position: 'absolute',
        justifyContent:"center",
        alignItems:"center",
        alignSelf: 'center',
        right:10,
        top:10,
    },
    switchCameraIcon:{
        height:30,
        width:30,
    },
    captureBtn:{
        height: 60,
        width: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: 'white',
        backgroundColor: 'red',
        position: 'absolute',
        bottom: 50,
        alignSelf: 'center'
    }
})