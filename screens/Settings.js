import { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Button, Icon } from "@ui-kitten/components";

import { AuthContext } from "../context/authContext";

const LeftArrow = (props) => <Icon name='arrow-circle-left-outline' {...props} />;

export default function Settings() {
	const { logout } = useContext(AuthContext);
	return (
		<View style={styles.container}>
			<Text style={styles.header}>Settings</Text>
			<Button
				onPress={logout}
				appearance='outline'
				status='primary'
				accessoryRight={LeftArrow}
			>
				Logout
			</Button>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignContent: "center",
		justifyContent: "space-between",
		padding: 20,
		marginVertical: 30,
	},
	header: {
		fontSize: 40,
		marginVertical: 10,
	},
});
