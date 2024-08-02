import { View } from 'react-native';
import BookedCabsList from '../BookedCabsList';

export default function MyCabScreen({ bookedCabsList, updateCabs }) {
    return (
        <View>
            <BookedCabsList
                bookedCabsList={bookedCabsList}
                updateCabs={updateCabs}
            />
        </View>
    );
}