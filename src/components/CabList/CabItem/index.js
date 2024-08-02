import { View, Text, Pressable } from 'react-native';
import styles from './styles';
import { MaterialIcons } from '@expo/vector-icons';

export default function CabItem({ id, company, model, passengerLimit, rating, cost, booked, bookedCabs, navigation }) {
    return (
        <Pressable onPress={() => navigation.navigate('CabDetails', { id, company, model, passengerLimit, rating, cost, booked, bookedCabs })}>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {company}
                    </Text>
                    <Text style={styles.subtitle}>
                        {model}
                    </Text>
                </View>
                <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
            </View >
        </Pressable>
    );
}