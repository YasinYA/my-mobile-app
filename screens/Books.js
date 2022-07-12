import { useState, useEffect } from "react";
import { View, Text, StyleSheet, FlatList, ActivityIndicator } from "react-native";

import Book from "../components/Book";

export default function Books() {
	const [books, setBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	async function getBooks() {
		const response = await fetch("https://www.dbooks.org/api/recent");
		const data = await response.json();
		if (data.status === "ok") setBooks(data.books);
	}

	useEffect(() => {
		getBooks();
		setLoading(false);
	}, []);

	return (
		<View style={styles.container}>
			<Text style={styles.header}>Books</Text>
			{loading ? (
				<ActivityIndicator />
			) : (
				<FlatList
					data={books}
					renderItem={({ item }) => {
						return <Book {...item} />;
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
	},
	header: {
		fontSize: 40,
		margin: 10,
	},
});
