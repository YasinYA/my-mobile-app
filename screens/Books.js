import { View, Text, StyleSheet } from "react-native";

export default function Books() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Books</Text>
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
