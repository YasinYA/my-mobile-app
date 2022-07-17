import { useContext } from "react";
import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Form from "../components/Form";
import { AuthContext } from "../context/authContext";

function SignUp({ navigation }) {
	const { register } = useContext(AuthContext);
	return (
		<KeyboardAwareScrollView style={styles.wrapper}>
			<View style={styles.wrapper}>
				<Form header='Sign Up' name={true} onPress={register} />
			</View>
		</KeyboardAwareScrollView>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});

export default SignUp;
