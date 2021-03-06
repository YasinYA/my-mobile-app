import { useState } from "react";
import { View, TextInput, Text, StyleSheet } from "react-native";
import { Button, Icon } from "@ui-kitten/components";

// import Button from "./Button";
// wakaa

const SignUpIcon = (props) => <Icon name='arrow-circle-right-outline' {...props} />;

function Form({ header, name, onPress }) {
	const [fullName, setFullName] = useState("");
	const [userName, setUserName] = useState("");
	const [password, setPassword] = useState("");

	return (
		<View style={styles.myClass}>
			<View style={styles.inputWrapper}>
				{name && (
					<View style={styles.formControl}>
						<Text style={styles.textClass}>Full Name</Text>
						<TextInput
							placeholder='Name'
							style={styles.input}
							onChangeText={(value) => setFullName(value)}
						/>
					</View>
				)}
				<View style={styles.formControl}>
					<Text style={styles.textClass}>Username</Text>
					<TextInput
						placeholder='Username'
						style={styles.input}
						onChangeText={(value) => setUserName(value)}
					/>
				</View>
				<View style={styles.formControl}>
					<Text style={styles.textClass}>Password</Text>
					<TextInput
						placeholder='Password'
						secureTextEntry={true}
						onChangeText={(value) => setPassword(value)}
						style={styles.input}
					/>
				</View>
			</View>
			<View>
				<Button onPress={onPress} appearance='outline' accessoryRight={SignUpIcon}>
					{header}
				</Button>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	header: {
		fontSize: 40,
		fontWeight: "bold",
		textAlign: "center",
	},
	myClass: {
		margin: 20,
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
	},
	inputWrapper: {
		marginTop: 40,
		marginBottom: 20,
	},
	input: {
		width: "100%",
		padding: 10,
		borderWidth: 1,
		marginBottom: 10,
	},
	formControl: {
		marginBottom: 20,
		marginTop: 20,
	},
	textClass: {
		color: "#666",
		marginBottom: 5,
		fontSize: 20,
	},
});

export default Form;
