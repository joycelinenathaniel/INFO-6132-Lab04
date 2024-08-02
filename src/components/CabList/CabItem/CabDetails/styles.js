import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'column',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    detailsContainer: {
        flex: 1,
        alignItem: 'center',
        width: '100%',
    },
    headerContainer: {
        alignItem: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        paddingVertical: 20,
        borderBottomWidth: 1,
    },
    iconContainer: {
        flexDirection: 'row',
        alignItem: 'center',
        paddingVertical: 10,

    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontWeight: '700',
        fontSize: 24,
        textAlign: 'center',
    },
    subtitle: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontWeight: '300',
        fontSize: 16,
        color: 'grey',
        textAlign: 'center',
        marginTop: 4,
    },
    cost: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontWeight: '700',
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 8,
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'black',
        padding: 10,
        width: '100%',
        height: 50,
        justifyContent: 'center',
        marginBottom: 20,
    },
    buttonText: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontWeight: '700',
        fontSize: 16,
        color: 'white',
    }

});