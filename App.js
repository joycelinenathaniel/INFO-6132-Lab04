import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import CabsStack from './src/components/CabsStack';
import MyCabScreen from './src/components/MyCabScreen';
import { Ionicons } from '@expo/vector-icons';
import { useEffect, useState } from 'react';
import AppLoader from './src/components/AppLoader';
import * as SplashScreen from 'expo-splash-screen';

const Tab = createBottomTabNavigator();

// Keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [cabs, setCabs] = useState([]);
  const [bookedCabs, setBookedCabs] = useState(0);
  const [bookedCabsList, setBookedCabsList] = useState([]);

  useEffect(() => {
    const filteredBookedCabs = cabs.filter(cab => cab.booked)
    setBookedCabsList(filteredBookedCabs);

    const bookedCount = filteredBookedCabs.length;
    setBookedCabs(bookedCount);

  }, [cabs, bookedCabs]);

  const updateCabs = (updatedCab) => {
    setCabs((prevCabs) =>
      prevCabs.map((cab) =>
        cab.id === updatedCab.id
          ? { ...cab, booked: updatedCab.booked }
          : cab
      )
    );
  };

  return (
    <NavigationContainer>
      <StatusBar style="auto" />
      <AppLoader
        setCabs={setCabs}
      />
      <Tab.Navigator
        screenOptions={{
          headerStyle: { backgroundColor: '#FDE541' },
          tabBarActiveTintColor: '#FDE541',
          tabBarInactiveTintColor: 'gray',
          tabBarStyle: { backgroundColor: 'black' }
        }}
      >
        <Tab.Screen
          name='Home'
          options={{
            headerShown: false,
            tabBarIcon: ({ focused, color, size }) => {
              const name = focused
                ? 'list-circle'
                : 'list-circle-outline';
              return (
                <Ionicons
                  name={name}
                  size={size}
                  color={color}
                />
              )
            }
          }}
        >
          {(props) => (
            <CabsStack
              {...props}
              cabs={cabs}
              bookedCabs={bookedCabs}
              updateCabs={updateCabs}
            />
          )}
        </Tab.Screen>
        <Tab.Screen
          name='MyCab'
          options={{
            tabBarIcon: ({ focused, color, size }) => {
              const name = focused
                ? 'receipt'
                : 'receipt-outline';
              return (
                <Ionicons
                  name={name}
                  size={size}
                  color={color}
                />
              )
            }
          }}>
          {(props) => (
            <MyCabScreen
              {...props}
              bookedCabsList={bookedCabsList}
              updateCabs={updateCabs}
            />
          )}
        </Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
