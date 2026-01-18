export const BooksInfo = () => {
  return (
    <div className="max-w-md mx-auto mt-10">
      <div className="card bg-white shadow-lg rounded-xl">
        <div className="card-body">
          <h2 className="card-title text-xl font-bold">
            Book Information
          </h2>

          <div className="space-y-2 text-sm">
            <p><span className="font-semibold">Title:</span> Clean Code</p>
            <p><span className="font-semibold">Author:</span> Robert C. Martin</p>
            <p><span className="font-semibold">Year:</span> 2008</p>
            <p><span className="font-semibold">Category:</span> Programming</p>
          </div>

          <div className="card-actions justify-end mt-6 gap-2">
            <button className="btn btn-success">
              Update
            </button>
            <button className="btn btn-error">
              Delete
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
