import { useContext } from "react";
import { View, StyleSheet } from "react-native";

import Form from "../components/Form";
import { AuthContext } from "../context/authContext";

function Login({ navigation }) {
	const { login } = useContext(AuthContext);
	return (
		<View style={styles.wrapper}>
			<Form header='Login' name={false} onPress={login} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});

export default Login;
