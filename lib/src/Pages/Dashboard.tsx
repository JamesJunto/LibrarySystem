import { Card } from "../Components/Card";
import { AllBooks } from "../Data/AllBooks";
import { useState } from "react";
import { Form } from "../Components/Form";

export const Dashboard = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <div className="flex flex-wrap gap-6 p-7">
        {AllBooks.map((book) => (
          <Card key={book.id} book={book} />
        ))}

        {/* Add Book Button */}
        <button
          onClick={() => setShowForm(true)}
          className="flex items-center justify-center w-96 h-40 border-2 border-dashed border-gray-300 rounded-2xl text-gray-500 text-lg font-medium hover:bg-gray-50 transition"
        >
          <span className="mr-2 text-2xl">+</span> Add Book
        </button>
      </div>

      {showForm && <Form onClose={() => setShowForm(false)} />}
    </>
  );
};
