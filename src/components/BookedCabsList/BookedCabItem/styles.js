import { StyleSheet, Platform } from 'react-native';

export default StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 20,
        flex: 1,
        backgroundColor: 'white',
        marginTop: 10,
        marginHorizontal: 10,
        borderWidth: 1,
        borderColor: '#DFDFDF'
    },
    titleContainer: {
        flexDirection: 'column',
        alignItem: 'center',
        justifyContent: 'flex-end'
    },
    title: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontWeight: '700',
        fontSize: 24,
    },
    subtitle: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontWeight: '300',
        fontSize: 16,
        color: 'grey',
    },
    button: {
        alignItems: 'center',
        padding: 10,
        width: '100%',
        justifyContent: 'center',
        borderWidth: 2,
        borderRadius: 5,

    },
    buttonText: {
        fontFamily: Platform.OS === 'ios' ? 'Arial' : 'Roboto',
        fontWeight: '500',
    }
});