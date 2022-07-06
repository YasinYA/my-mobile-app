import { View, Text, StyleSheet } from "react-native";

export default function SavedBooks() {
	return (
		<View style={styles.container}>
			<Text style={styles.header}>SavedBooks</Text>
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
