import { View, Text, Pressable, Image, StyleSheet } from "react-native";


function Mealitem ({title, imageUrl, duration, complexity, affordability}) {  
return (
    <Pressable style={styles.Mealitem}>
    <View>
        <Image style={styles.image} source={{uri: imageUrl}}/>
        <Text style={styles.title} >{title} </Text>
    </View>
    <View style={styles.details}>
        <Text style={styles.detailItem}>{duration}min</Text>
        <Text style={styles.detailItem}>{complexity.toUpperCase()}</Text>
        <Text style={styles.detailItem}>{affordability.toUpperCase()}</Text>
    </View>
    </Pressable>
)
}
const styles = StyleSheet.create({
    Mealitem:{
      margin:10,
      borderRadius:8,
      overflow: 'hidden',
      backgroundColor:'white',
      elevation: 4,
      shadowColor: "black",
      shadowOpacity: 0.5,
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 20,
      backgroundColor: "white",
      overflow:Platform.OS === 'android'? 'hidden' : 'visible',
    },
    image:{
        width:'100%',
        height: 200
    },
    title:{
        fontWeight:'bold',
        textAlign: 'center',
        fontSize:18,
        margin: 8,
    },
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

})
export default Mealitem;