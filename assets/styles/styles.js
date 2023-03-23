import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%'
    },
    title: {
        fontFamily: 'Verdana',
        fontSize: 20,
        color: '#ffffff',
        backgroundColor: 'teal',
        textAlign: 'center',
        padding: 5,
        direction: 'row'
    },
    label: {
        fontSize: 16,
        fontWeight: 'bold',
        width: '60%'
    },
    textInput: {
        padding: 5,
        borderBottomColor: '#000',
        borderBottomWidth: 2,
        fontSize: 16,
        color:'black',
        textAlign:'left',
        width: '40%'
    },
    inputsContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
        justifyContent: 'space-between',
        width: '100%'
    },
    buttonsContainer: {
        marginTop:20, 
        marginBottom:20, 
        flexDirection:'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        width:'100%'
    },
    buttons:{
        backgroundColor: 'teal',
        borderRadius:10,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        marginBottom: 10,
        width: '100%'
    },
    textButtons:{
        color:'#ffffff',
        fontWeight:'bold',
        letterSpacing: 3
    },
    resultado: {
        padding: 15,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderColor: '#000',
        borderBottomWidth: 2,
        fontSize: 16,
        color:'black',
        textAlign:'left',
        width: '40%',
        justifyContent: 'center'
    }
});

export {styles}