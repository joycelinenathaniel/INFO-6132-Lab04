import { View, Text, Alert, TouchableOpacity } from 'react-native';
import styles from './styles';
import * as database from '../../../../database';
import Ionicons from '@expo/vector-icons/Ionicons';

export default function CabDetails({ route, updateCabs }) {
    const { id, company, model, passengerLimit, rating, cost, booked, bookedCabs } = route.params;

    //Book Cab
    const handleBookPress = () => {
        Alert.alert('Book Cab', 'Are you sure you want to book this cab?',
            [
                {
                    text: 'Yes',
                    onPress: async () => {
                        if (booked) {
                            if (bookedCabs >= 2) {
                                Alert.alert('Error', 'You have already booked 2 cabs. You cannot book any more at this time.');
                                return;
                            } else {
                                Alert.alert('Error', 'You have already booked this cab.');
                                return;
                            }
                        }

                        if (bookedCabs >= 2) {
                            Alert.alert('Error', 'You have already booked 2 cabs. You cannot book any more at this time.');
                            return;
                        }

                        const updated = await database.update(id, { booked: true });
                        if (!updated) {
                            Alert.alert('Error', "There was an error trying to book your cab.");
                        } else {
                            updateCabs({ id, booked: true });
                            Alert.alert('Success', "Cab booked successfully.");
                        }
                    }
                },
                {
                    text: 'No'
                }
            ]
        );
    }


    return (
        <View style={styles.container}>
            <View style={styles.detailsContainer}>
                <View style={styles.headerContainer}>
                    <Text style={styles.title}>{company}</Text>
                    <Text style={styles.subtitle}>{model}</Text>
                    <Text style={styles.cost}>${cost}/hr</Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="people-sharp" size={24} color="black" style={{ paddingRight: 10 }} />
                    <Text>Up to {passengerLimit} passengers </Text>
                </View>
                <View style={styles.iconContainer}>
                    <Ionicons name="star" size={24} color="black" style={{ paddingRight: 10 }} />
                    <Text>{rating}/5</Text>
                </View>
            </View>
            <TouchableOpacity style={styles.button} onPress={handleBookPress}>
                <Text style={styles.buttonText}>Book Cab</Text>
            </TouchableOpacity>
        </View>
    );
}