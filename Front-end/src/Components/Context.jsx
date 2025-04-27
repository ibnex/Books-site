import { createContext , useContext , useState } from "react";

const BookContext = createContext();
export function BookProvider({ children }) {
    const [books, setBooks] = useState([])
    const addBook = (newBook) => {
        setBooks([...books, newBook]);
        // setBooks((prev)=>[...prev , books])
      };
    return (
        <BookContext.Provider value={{ books, addBook }}>
          {children}
        </BookContext.Provider>
      );
    }

    export function useBooks() {
        return useContext(BookContext);
      }