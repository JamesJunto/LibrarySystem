import type { IBooks } from "../Interface/IBooks";

export const Card = ({ book }: { book: IBooks }) => {
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt={book.title} 
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {book.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>
          <strong>Author:</strong> {book.author} <br />
          <strong>Year:</strong> {book.year} <br />
          <strong>Genre:</strong> {book.genre}
        </p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">{book.genre}</div>
          <div className="badge badge-outline">{book.year}</div>
        </div>
      </div>
    </div>
  );
};
