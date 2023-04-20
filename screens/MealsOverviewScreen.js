import { MEALS } from "../data/dummy-data";
import { View, Text } from "react-native";
import { StyleSheet } from "react-native";
import { FlatList } from "react-native";

import Mealitem from "../components/MealItem";


function MealsOverViewScreen({ route }) {

    const catId = route.params.catagoryId;

    const displayedMeals = MEALS.filter((mealItem)=>{
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });
    function renderMealItem (itemData) {
      const item = itemData.item;
      const mealItemProps ={
      title: item.title,
      imageUrl: item.imageUrl,
      affordability: item.affordability,
      complexity: item.complexity,
      duration: item.duration
      };

      return <Mealitem {...mealItemProps} />
    }

  return (
    <View>
      <FlatList data={displayedMeals} keyExtractor={(item)=> item.id} renderItem={renderMealItem} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
});

export default MealsOverViewScreen;
