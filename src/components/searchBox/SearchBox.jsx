const SearchBox = ({ onFilterContacts }) => {
  return (
    <div>
      <p>Find contacts by name</p>
      <input
        type="text"
        name="search"
        placeholder="Search..."
        onChange={onFilterContacts}
      />
    </div>
  );
};

export default SearchBox;
