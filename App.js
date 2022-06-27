import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, ScrollView } from "react-native";

import Button from "./components/Button";

export default function App() {
	return (
		<View style={styles.container}>
			<Text style={styles.textClass}>Open up App.js to start working on your app!</Text>

			<TextInput style={styles.input} name='name' placeHolder='Name' />
			<Button text='Save' onPress={function () {}} />
			<StatusBar style='auto' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#ccc",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		height: 40,
		width: "80%",
		padding: 10,
		borderWidth: 1,
		margin: 12,
	},
	textClass: {
		color: "red",
		backgroundColor: "white",
		fontSize: 12,
	},
});
