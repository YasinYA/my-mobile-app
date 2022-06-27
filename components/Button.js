import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Button({ text, onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text>{text}</Text>
		</TouchableOpacity>
	);
}

const styles = StyleSheet.create({
	button: {
		alignItems: "center",
		backgroundColor: "#DDDDDD",
		padding: 10,
	},
});

export default Button;
