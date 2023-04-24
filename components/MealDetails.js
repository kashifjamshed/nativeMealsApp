import { View, Text, StyleSheet } from "react-native";

function MealDetails({duration, complexity, affordability}){
    return(
        <View>
        <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}min</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
      </View>
    </View>
    )
}
const styles = StyleSheet.create({ 
    details:{
        flexDirection: 'row',
        alignItem: 'center',
        padding: 8,
        justifyContent: 'center'
    },
    detailItem:{
        marginHorizontal:4,
        fontSize:12
    }

});
export default MealDetails;
