import { View, ActivityIndicator, StyleSheet } from "react-native";

function Loading() {
	return (
		<View style={styles.container}>
			<ActivityIndicator color='#f4511e' size='large' />
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignItems: "center",
		backgroundColor: "#DDDDDD",
	},
});

export default Loading;
