import { createStackNavigator } from '@react-navigation/stack';
import { HomeApp } from '../HomeApp/HomeApp';
import { PokemonScreen } from '../Pokemons/PokemonScreen';
import { SearchScreen } from '../search/SearchScreen';


export type RootStackParams = {
  HomeApp: undefined;
  PokemonScreen: { pokemonId: number };
  SearchScreen: undefined;
}

const Stack = createStackNavigator<RootStackParams>();


export const StackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{
      headerShown: false
    }}>
      <Stack.Screen name="HomeApp" component={ HomeApp } />
      <Stack.Screen name="PokemonScreen" component={ PokemonScreen } />
      <Stack.Screen name="SearchScreen" component={ SearchScreen } />      
    </Stack.Navigator>
  );
}