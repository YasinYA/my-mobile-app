import { View, StyleSheet } from "react-native";

import Form from "../components/Form";

function SignUp() {
	return (
		<View style={styles.wrapper}>
			<Form header='SignUp' name={true} />
		</View>
	);
}

const styles = StyleSheet.create({
	wrapper: {
		flex: 1,
	},
});

export default SignUp;
