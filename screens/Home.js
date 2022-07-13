import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Button, Icon } from "@ui-kitten/components";

import Books from "./Books";
import Settings from "./Settings";
import SavedBooks from "./SavedBooks";

const Tabs = createMaterialBottomTabNavigator();

function Home() {
	return (
		<Tabs.Navigator>
			<Tabs.Screen
				name='Books'
				options={{
					tabBarIcon: ({ props }) => <Icon {...props} name='book-outline' />,
				}}
				component={Books}
			/>
			<Tabs.Screen name='SavedBooks' component={SavedBooks} />
			<Tabs.Screen name='Settings' component={Settings} />
		</Tabs.Navigator>
	);
	// TODO: Change the title tabs screens title.
	// TODO: CREATE ICONS FOR THE TABS
}

export default Home;
