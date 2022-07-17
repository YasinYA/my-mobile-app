import { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image } from "react-native";
import { Button, Icon } from "@ui-kitten/components";

import { useBooks } from "../context/booksContext";

const DownArrow = (props) => <Icon name='arrow-circle-down-outline' {...props} />;

const BookDetail = ({ route, navigation }) => {
	const [book, setBook] = useState({});
	const { getBook, setSavedBooks, savedBooks } = useBooks();
	const [saved, setSaved] = useState(false);

	useEffect(() => {
		setBook(getBook(route.params.id));
		const obj = savedBooks.find((item) => parseInt(item.id) === parseInt(book.id));
		if (obj) {
			setSaved(true);
		}
	}, [book]);

	return (
		<View style={styles.container}>
			<View style={styles.imgWrapper}>
				<Image style={styles.img} source={{ uri: book?.image }} />
			</View>
			<View style={styles.textWrapper}>
				<Text center style={styles.title}>
					{book?.title}
				</Text>
				<Text center style={styles.authors}>
					{book?.authors}
				</Text>
			</View>
			{!saved && (
				<Button
					onPress={() => {
						setSavedBooks((savedBooks) => {
							return [...savedBooks, book];
						});
						navigation.navigate("SavedBooks");
					}}
					appearance='outline'
					status='primary'
					accessoryRight={DownArrow}
				>
					Save
				</Button>
			)}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flex: 1,
		width: "98%",
		height: "100%",
		padding: 10,
		marginBottom: 20,
	},
	img: {
		width: "100%",
		height: "100%",
		borderRadius: 10,
	},
	imgWrapper: {
		width: "100%",
		height: 300,
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
		fontSize: 30,
	},
	authors: {
		maxWidth: "100%",
		fontSize: 20,
	},
});

export default BookDetail;
