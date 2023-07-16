function SearchBar({ changeTextSearch }) {
  return (
    <div className="h-14 drop-shadow-md w-[90vw] flex justify-center items-center transition-all duration-300 py-3 px-5 mx-auto bg-darkBlue dark:bg-white rounded md:w-[40vw] ">
      <svg
        className="h-5 fill-white transition-all duration-300 dark:fill-veryDarkBlue2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z" />
      </svg>
      <input
        type="text"
        className="font-nunito2 text-white transition-colors duration-300 dark:text-veryDarkBlue2 ml-6 placeholder-darkGray w-full bg-darkBlue dark:bg-white focus:outline-none"
        placeholder="Search for a country..."
        onChange={(event) => {
          changeTextSearch(event.target.value);
        }}
      />
    </div>
  );
}

export default SearchBar;
