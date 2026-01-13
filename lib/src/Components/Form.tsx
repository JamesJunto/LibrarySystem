export const Form = ({ onClose }: { onClose: () => void }) => {
  return (
    <div className="fixed inset-0 bg-black/30 flex items-center justify-center z-50">
      <form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md space-y-4 relative">
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg font-bold"
        >
          ×
        </button>

        <h2 className="text-2xl font-semibold text-gray-800 text-center">
          Add New Book
        </h2>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Title
          </label>
          <input
            type="text"
            placeholder="Book title"
            className="input input-bordered w-full bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Author
          </label>
          <input
            type="text"
            placeholder="Author name"
            className="input input-bordered w-full bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Year
          </label>
          <input
            type="number"
            placeholder="Publication year"
            className="input input-bordered w-full bg-white"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-600 mb-1">
            Genre
          </label>
          <input
            type="text"
            placeholder="Genre"
            className="input input-bordered w-full bg-white"
          />
        </div>

        <button className="btn btn-primary w-full">
          Save Book
        </button>
      </form>
    </div>
  );
};
