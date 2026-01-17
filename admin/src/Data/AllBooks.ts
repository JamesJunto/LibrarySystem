import { type IBooks } from "../Interface/IBooks";
import { useFetch } from "../hooks/useGet";
import { useEffect } from "react";

let allBooksArray: IBooks[] = [];

export const AllBooks = () => { 
  const { data } = useFetch("http://localhost:8080/getBook.php");
  
  useEffect(() => {
    if (data) {
      allBooksArray = data; 
    }
  }, [data]);
  
  return allBooksArray;
};