import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import CabList from '../CabList';
import CabDetails from '../CabList/CabItem/CabDetails';

const Stack = createStackNavigator();

export default function CabsStack({ cabs, bookedCabs, updateCabs, navigation }) {
    return (
        <Stack.Navigator
            screenOptions={{
                headerStyle: { backgroundColor: '#FDE541' },
                tabBarActiveTintColor: '#FDE541',
                tabBarInactiveTintColor: 'gray',
            }}
        >
            <Stack.Screen
                name="CabList"
                options={({ navigation }) => ({
                    title: 'Cabs'
                })}
            >
                {(props) => (
                    <CabList
                        {...props}
                        cabs={cabs}
                        bookedCabs={bookedCabs}
                    />
                )}
            </Stack.Screen>
            <Stack.Screen
                name="CabDetails"
                options={{
                    tabBarStyle: { display: 'none'},
                }}
            >
                {(props) => (
                    <CabDetails
                        {...props}
                        updateCabs={updateCabs}
                    />
                )}
            </Stack.Screen>
        </Stack.Navigator>
    );
}