import { Children } from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

function Button({ children, onPress }) {
	return (
		<TouchableOpacity style={styles.button} onPress={onPress}>
			<Text>{children}</Text>
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
