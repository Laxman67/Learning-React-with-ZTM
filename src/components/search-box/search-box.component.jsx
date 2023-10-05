import "./search-box.styles.css";

const SearchBox = ({ onChangeHandler, placeholder, className }) => {
  //  or const SearchBox = (props) => {
  // const { onChangeHandler, placeholder, className } = props;

  <input
    className={`search-box  ${className}`}
    placeholder={placeholder}
    type="search"
    onChange={onChangeHandler}
  />;
};

export default SearchBox;
