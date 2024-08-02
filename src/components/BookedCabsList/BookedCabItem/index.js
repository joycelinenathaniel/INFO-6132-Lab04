import { View, Text, Alert, ActivityIndicator, TouchableOpacity } from 'react-native';
import styles from './styles';
import { useState } from 'react';
import * as database from '../../../database';

export default function BookedCabItem({ id, company, model, updateCabs }) {
    const [cancelCab, setCancelCab] = useState(false);

    //Delete a task
    const handleCancelPress = () => {
        Alert.alert('Cancel Cab', `Are you sure you want to cancel the ${company} cab?`,
            [
                {
                    text: 'Yes',
                    onPress: async () => {
                        setCancelCab(true);
                        const cancelled = await database.update(id, { booked: false });
                        setCancelCab(false);
                        if (!cancelled) {
                            Alert.alert('Error', 'There was an error trying to cancel the cab. Please try again later.');
                        } else {
                            updateCabs({ id, booked: false });
                            Alert.alert('Success', "Cab successfully cancelled.");
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
        <>
            <View style={styles.container}>
                <View style={styles.titleContainer}>
                    <Text style={styles.title}>
                        {company}
                    </Text>
                    <Text style={styles.subtitle}>
                        {model}
                    </Text>
                </View>

                {!cancelCab && (
                    <View>
                        <TouchableOpacity style={styles.button} onPress={handleCancelPress}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View >
            {cancelCab && (
                <View style={styles.loadingContainer}>
                    <ActivityIndicator size='large' />
                </View>
            )}
        </>
    );
}