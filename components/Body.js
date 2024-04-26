const [allRestaurants, setAllRestaurants] = useState([]);
const [filteredRestaurants, setFilteredRestaurants] = useState([]);
const [searchText, setSearchText] = useState("");
const {user, setUser} = useContext(UserContext);
const { user, setUser } = useContext(UserContext);
useEffect(() => {
  getRestaurants();
 const Body = () => {
  <>
    <div className="search-container p-5 bg-pink-50 my-5">
      <input
        data-testid="search-input"
        type="text"
        className="focus:bg-green-200 p-2 m-2"
        placeholder="Search"
 const Body = () => {
        }}
      />
      <button
      className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
        data-testid="search-btn"
        className="p-2 m-2 bg-purple-900 hover:bg-gray-500 text-white rounded-md"
        onClick={() => {
          //need to filter the data
          const data = filterData(searchText, allRestaurants);