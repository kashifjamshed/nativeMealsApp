import { StatusBar } from "expo-status-bar";
import { Button, StyleSheet, Text, View } from "react-native";
import CategoriesScreen from "./screens/CategoriesScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MealsOverViewScreen from "./screens/MealsOverviewScreen";
import MealDetailScreen from "./screens/MealDetailsScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar style="dark"></StatusBar>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{  
              headerStyle: { backgroundColor: "pink" },
              headerTintColor: 'white',
             contentStyle:{ backgroundColor:'#ffe9ec'}}}>
          <Stack.Screen
            name="MealsCategories"
            component={CategoriesScreen}
            options={{
              title: "All Categories",
              headerStyle: { backgroundColor: "pink" },
              headerTintColor: 'white',
             contentStyle:{ backgroundColor:'#ffe9ec'}
            }}
          />
          <Stack.Screen name="MealsOverview" component={MealsOverViewScreen}
          // // options={({route, navigation}) => {
          // //   const catId = route.params.catagoryId;
          // //   return {
          // //       title: catId
          //   };
          // }} 
          />
           <Stack.Screen name="MealDetail" component={MealDetailScreen} 
          //  options={{headerRight: ()=>{
          //   return <Button title="Tap me"></Button>  We could set a button here but we need component interaction so we need to set that button on that component only.
           
          // // options={({route, navigation}) => {
          // //   const catId = route.params.catagoryId;
          // //   return {
          // //       title: catId
          //   };
          // }} 
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
