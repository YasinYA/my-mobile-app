import { View, Image, Text, StyleSheet, Pressable } from "react-native";

export default function Book({ id, image, title, authors }) {
	return (
		<Pressable>
			<View style={styles.container}>
				<View style={styles.imgWrapper}>
					<Image style={styles.img} source={{ uri: image }} />
				</View>
				<View style={styles.textWrapper}>
					<Text center style={styles.title}>
						{title}
					</Text>
					<Text center style={styles.authors}>
						{authors}
					</Text>
				</View>
			</View>
		</Pressable>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "98%",
		height: 130,
		flexDirection: "row",
		padding: 10,
		marginBottom: 20,
	},
	img: {
		width: 100,
		height: 100,
		borderRadius: 10,
	},
	imgWrapper: {
		width: 100,
		borderRadius: 10,
		elevation: 10,
		shadowRadius: 6,
		shadowOpacity: 0.3,
		shadowOffset: { width: 0, height: 0 },
	},
	textWrapper: {
		width: "100%",
		height: "100%",
		padding: 10,
		flex: 1,
	},
	title: {
		fontWeight: "bold",
		marginBottom: 10,
		fontSize: 16,
	},
	authors: {
		maxWidth: "100%",
	},
});
