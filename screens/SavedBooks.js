import { View, FlatList, Text, StyleSheet } from "react-native";
import { Button, Icon } from "@ui-kitten/components";

import Book from "../components/Book";

import { useBooks } from "../context/booksContext";

const TrashCan = (props) => <Icon name='trash-2-outline' {...props} />;

export default function SavedBooks({ navigation }) {
	const { savedBooks, removeSavedBook, setSavedBooks } = useBooks();

	return (
		<View style={styles.container}>
			{savedBooks.length < 1 ? (
				<View style={styles.textContainer}>
					<Text style={styles.header}>No Saved Books</Text>
				</View>
			) : (
				<>
					<View style={styles.headerContainer}>
						<Text style={styles.header}>Saved Books</Text>
					</View>
					<FlatList
						data={savedBooks}
						renderItem={({ item }) => {
							return (
								<View style={styles.bookContainer}>
									<Book navigation={navigation} {...item} />
									<View style={styles.button}>
										<Button
											onPress={() => {
												setSavedBooks(removeSavedBook(item.id));
											}}
											appearance='outline'
											status='danger'
											accessoryRight={TrashCan}
										>
											Delete
										</Button>
									</View>
								</View>
							);
						}}
						keyExtractor={(item) => item.id}
					/>
				</>
			)}
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		marginVertical: 30,
	},
	textContainer: {
		flex: 1,
		justifyContent: "center",
		alignContent: "center",
		padding: 20,
	},
	headerContainer: {
		padding: 20,
	},
	header: {
		fontSize: 30,
	},
	bookContainer: {
		marginBottom: 20,
	},
	button: {
		paddingHorizontal: 10,
	},
});
