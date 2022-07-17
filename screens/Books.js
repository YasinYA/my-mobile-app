import { View, StyleSheet, FlatList } from "react-native";

import Book from "../components/Book";
import Loading from "../components/Loading";

import { useBooks } from "../context/booksContext";

export default function Books({ navigation }) {
	const { books, loading } = useBooks();

	return (
		<View style={styles.container}>
			{loading ? (
				<Loading />
			) : (
				<FlatList
					data={books}
					renderItem={({ item }) => {
						return <Book navigation={navigation} {...item} />;
					}}
					keyExtractor={(item) => item.id}
				/>
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
	header: {
		fontSize: 40,
		margin: 10,
	},
});
