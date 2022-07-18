import { createContext, useState, useEffect, useContext } from "react";

const BooksContext = createContext();

const BooksContextProvider = ({ children }) => {
	const [books, setBooks] = useState([]);
	const [savedBooks, setSavedBooks] = useState([]);
	const [loading, setLoading] = useState(true);

	async function getBooks() {
		const response = await fetch("https://www.dbooks.org/api/recent");
		const data = await response.json();
		if (data.status === "ok") setBooks(data.books);
	}

	function getBook(id) {
		return books.find((item) => parseInt(item.id) === parseInt(id));
	}

	function removeSavedBook(id) {
		return savedBooks.filter((book) => !parseInt(book.id) === parseInt(id));
	}

	useEffect(() => {
		getBooks();
		setLoading(false);
	}, []);

	const context = {
		books,
		savedBooks,
		setSavedBooks,
		getBook,
		removeSavedBook,
	};

	return <BooksContext.Provider value={context}>{children}</BooksContext.Provider>;
};

const useBooks = function () {
	return useContext(BooksContext);
};

export { useBooks, BooksContextProvider };
