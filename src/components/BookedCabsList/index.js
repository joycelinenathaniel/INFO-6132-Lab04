import { ScrollView } from 'react-native';
import BookedCabItem from './BookedCabItem';

export default function BookedCabsList({ bookedCabsList, updateCabs }) {
    return (
        <ScrollView>
            {bookedCabsList.map((cab, index) => {
                return (
                    <BookedCabItem
                        key={index}
                        id={cab.id}
                        company={cab.company}
                        model={cab.model}
                        updateCabs={updateCabs}
                    />
                )
            })}
        </ScrollView>
    );
}