import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import IonIcons from "react-native-vector-icons/Ionicons";

import Books from "./Books";
import Settings from "./Settings";
import SavedBooks from "./SavedBooks";
import BookDetail from "./BookDetails";

const Tabs = createMaterialBottomTabNavigator();

const BooksStack = createNativeStackNavigator();

const BookStackScreens = () => (
	<BooksStack.Navigator initialRouteName='BookList'>
		<BooksStack.Screen name='BookList' component={Books} />
		<BooksStack.Screen
			name='BookDetail'
			options={({ route }) => ({
				title: route.params.name,
			})}
			component={BookDetail}
		/>
	</BooksStack.Navigator>
);

function Home() {
	return (
		<Tabs.Navigator
			barStyle={{ backgroundColor: "#f4511e" }}
			initialRouteName='Books'
			screenOptions={({ route }) => {
				return {
					tabBarIcon: ({ focused, color, size }) => {
						let iconName;

						if (route.name === "Books") {
							iconName = focused ? "book" : "book-outline";
						} else if (route.name === "SavedBooks") {
							iconName = focused ? "bookmarks" : "bookmarks-outline";
						} else {
							iconName = focused ? "cog" : "cog-outline";
						}

						return <IonIcons name={iconName} size={26} color={color} />;
					},
				};
			}}
		>
			<Tabs.Screen
				name='Books'
				options={{
					title: "Books",
				}}
				component={BookStackScreens}
			/>
			<Tabs.Screen name='SavedBooks' component={SavedBooks} />
			<Tabs.Screen name='Settings' component={Settings} />
		</Tabs.Navigator>
	);
	// TODO: Change the title tabs screens title.
	// TODO: CREATE ICONS FOR THE TABS
}

export default Home;
