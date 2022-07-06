import { View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";

import Form from "../components/Form";

function SignUp({ navigation }) {
	return (
		<KeyboardAvoidingView
			style={styles.wrapper}
			behavior={Platform.OS === "ios" ? "padding" : "height"}
		>
			<View style={styles.wrapper}>
				<Form header='SignUp' name={true} navigateTo='Login' navigation={navigation} />
			</View>
		</KeyboardAvoidingView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});

export default SignUp;
