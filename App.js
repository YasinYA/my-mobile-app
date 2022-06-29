import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, TextInput, ScrollView, FlatList } from "react-native";

import Button from "./components/Button";

export default function App() {
	const names = [
		{ name: "Ben", id: 1 },
		{ name: "Susan", id: 2 },
		{ name: "Robert", id: 3 },
		{ name: "Mary", id: 4 },
		{ name: "Daniel", id: 5 },
		{ name: "Laura", id: 6 },
		{ name: "John", id: 7 },
		{ name: "Debra", id: 8 },
		{ name: "Aron", id: 9 },
		{ name: "Ann", id: 10 },
		{ name: "Steve", id: 11 },
		{ name: "Olivia", id: 12 },
	];
	return (
		<View style={styles.wrapper}>
			{/* ScrollView */}

			{/* <ScrollView>
				{names.map((item) => (
					<View key={item.id} style={styles.container}>
						<Text style={styles.textClass}>{item.name}</Text>
					</View>
				))}
			</ScrollView> */}

			{/* FlatList */}
			{/* <FlatList
				data={names}
				renderItem={function ({ item }) {
					return (
						<View key={item.id} style={styles.container}>
							<Text style={styles.textClass}>{item.name}</Text>
						</View>
					);
				}}
				horizontal={true}
			/> */}
			{/* Form */}

			<View style={styles.myClass}>
				<Text style={styles.header}>Login</Text>
				<View style={styles.inputWrapper}>
					<View>
						<Text>Username</Text>
						<TextInput placeholder='Username' style={styles.input} />
					</View>
					<TextInput placeholder='Password' style={styles.input} />
				</View>
				<View>
					<Button text='Login' />
				</View>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
	header: {
		fontSize: 40,
		fontWeight: "bold",
		textAlign: "center",
	},
	container: {
		flexDirection: "row",
		justifyContent: "space-between",
		alignItems: "center",
		padding: 40,
		backgroundColor: "#d2f7f1",
	},
	myClass: {
		margin: 20,
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	inputWrapper: {
		marginTop: 40,
		marginBottom: 40,
	},
	input: {
		width: "100%",
		padding: 10,
		borderWidth: 1,
		marginBottom: 10,
	},
	textClass: {
		color: "#666",
		fontSize: 20,
	},
});
