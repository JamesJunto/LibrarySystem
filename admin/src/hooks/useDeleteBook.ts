export const useDeleteBook = () => {

  const deleteBook = async (url: string, bookId: number) => {
    try {
      const response = await fetch(url, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ bookId })
      });

      const result = await response.json()
      console.log(result)

    } catch (e) {
      console.error(e);
    }

  };
  return { deleteBook }
  
};

