export const SideNav = () => {
  return (
    <div className="drawer lg:drawer-open w-50 ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />

      {/* EMPTY CONTENT (required by drawer) */}
      <div className="drawer-content lg:hidden">
        <label htmlFor="my-drawer-3" className="btn btn-primary drawer-button m-4">
          Open Menu
        </label>
      </div>

      {/* SIDEBAR */}
      <div className="drawer-side">
        <label htmlFor="my-drawer-3" className="drawer-overlay"></label>

        <aside className="w-64 min-h-full">
          {/* HEADER */}
          <div className="p-4 border-b border-base-300">
            <h1 className="text-[23px] font-bold">📚 Library Admin</h1>
            <p className="text-sm text-gray-500">Management Panel</p>
          </div>

          {/* MENU */}
          <ul className="menu p-4 gap-1">
            <li>
              <a className="active text-[17px]">📊 Dashboard</a>
            </li>

            <li className="menu-title mt-3">
              <span className="text-[19px]">Books</span>
            </li>

            <li>
              <a className=" text-[17px]">📚 All Books</a>
            </li>

            <li>
              <a className=" text-[17px]">➕ Add Book</a>
            </li>

            <li className="menu-title mt-3">
              <span className=" text-[17px]" >Transactions</span>
            </li>

            <li>
              <a className=" text-[17px]">📖 Borrowed Books</a>
            </li>

            <li>
              <a className=" text-[17px]">📦 Returned Books</a>
            </li>

            <li className="menu-title mt-3">
              <span >System</span>
            </li>
            <li>
              <a className="text-red-500 text-[17px]">🚪 Logout</a>
            </li>
          </ul>
        </aside>
      </div>
    </div>
  );
};
