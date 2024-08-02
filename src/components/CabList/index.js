import { ScrollView } from 'react-native';
import CabItem from './CabItem';

export default function CabList({ cabs, navigation, bookedCabs }) {
    return (
        <ScrollView>
            {cabs.map((cab, index) => {
                return (
                    <CabItem
                        key={index}
                        id={cab.id}
                        company={cab.company}
                        model={cab.model}
                        passengerLimit={cab.passengerLimit}
                        rating={cab.rating}
                        cost={cab.cost}
                        navigation={navigation}
                        booked={cab.booked}
                        bookedCabs={bookedCabs}
                    />
                )
            })}
        </ScrollView>
    );
}