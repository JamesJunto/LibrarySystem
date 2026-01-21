import { useGet} from "../hooks/useGet";

export const useAllBooks = () => { 
  return useGet("http://localhost:8080/getBook.php");
};