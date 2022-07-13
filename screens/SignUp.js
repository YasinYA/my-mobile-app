import { View, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Form from "../components/Form";

function SignUp({ navigation }) {
	return (
		<KeyboardAwareScrollView style={styles.wrapper}>
			<View style={styles.wrapper}>
				<Form header='SignUp' name={true} navigateTo='Login' navigation={navigation} />
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
