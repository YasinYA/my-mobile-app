import { View, Text, StyleSheet } from "react-native";

export default function Settings() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Settings</Text>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	header: {
		fontSize: 40,
	},
});
