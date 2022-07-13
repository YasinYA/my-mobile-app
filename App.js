import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as eva from "@eva-design/eva";
import { ApplicationProvider, IconRegistry } from "@ui-kitten/components";
import { EvaIconsPack } from "@ui-kitten/eva-icons";

import Login from "./screens/Login";
import SignUp from "./screens/SignUp";
import Home from "./screens/Home";

const Stack = createNativeStackNavigator();

export default function App() {
	return (
		<>
			<IconRegistry icons={EvaIconsPack} />
			<ApplicationProvider {...eva} theme={eva.light}>
				<NavigationContainer>
					<Stack.Navigator
						screenOptions={{
							headerStyle: {
								backgroundColor: "#f4511e",
							},
							headerTintColor: {
								color: "white",
							},
							headerTitleStyle: {
								fontWeight: "bold",
							},
							headerTitleAlign: "center",
						}}
						initialRouteName='SignUp'
						style={styles.wrapper}
					>
						<Stack.Screen name='Home' component={Home} />
						<Stack.Screen name='Login' component={Login} />
						<Stack.Screen name='SignUp' component={SignUp} />
					</Stack.Navigator>
				</NavigationContainer>
			</ApplicationProvider>
		</>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
		justifyContent: "center",
		alignItem: "center",
		width: "100%",
	},
});
