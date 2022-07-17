import { useMemo, useState, useEffect } from "react";
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

import { myTheme } from "./custom-theme";

import Loading from "./components/Loading";

import { BooksContextProvider } from "./context/booksContext";
import { AuthContext } from "./context/authContext";

const Stack = createNativeStackNavigator();

export default function App() {
	const [loading, setLoading] = useState(true);
	const [userToken, setUserToken] = useState(null);

	const authMethods = useMemo(() => {
		return {
			login: () => {
				setLoading(false);
				setUserToken("token");
			},
			register: () => {
				setLoading(false);
				setUserToken("token");
			},
			logout: () => {
				setLoading(false);
				setUserToken(null);
			},
		};
	}, []);

	useEffect(() => {
		setTimeout(() => {
			setLoading(false);
		}, 3000);
	}, []);

	if (loading) return <Loading />;

	return (
		<AuthContext.Provider value={authMethods}>
			<BooksContextProvider>
				<StatusBar />
				<IconRegistry icons={EvaIconsPack} />
				<ApplicationProvider {...eva} theme={{ ...eva.light, ...myTheme }}>
					<NavigationContainer>
						{userToken ? (
							<Home />
						) : (
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
								initialRouteName='Login'
								style={styles.wrapper}
							>
								<Stack.Screen
									name='Login'
									options={{ title: "Log in" }}
									component={Login}
								/>
								<Stack.Screen
									name='SignUp'
									options={{ title: "Sign Up" }}
									component={SignUp}
								/>
							</Stack.Navigator>
						)}
					</NavigationContainer>
				</ApplicationProvider>
			</BooksContextProvider>
		</AuthContext.Provider>
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
