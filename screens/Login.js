import { View, StyleSheet } from "react-native";

import Form from "../components/Form";

function Login() {
	return (
		<View style={styles.wrapper}>
			<Form header='Login' name={false} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});

export default Login;
