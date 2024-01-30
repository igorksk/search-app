import { useState, useEffect } from "react";
import { DATA, Person } from "./CustomersDB";
import useDebounce from "./Hooks";

const SearchList: React.FC = () => {

  const [customersList, ] = useState<Person[]>(DATA);
  const [filteredCustomersList, setFilteredCustomersList] = useState<Person[]>(DATA);

  const [searchTerm, setSearchTerm] = useState<string>('');

  const debounceDelay = 500;

  const debouncedSearchTerm = useDebounce(searchTerm, debounceDelay);

    const handleSearch = () => {
      if (searchTerm === '') {
        setFilteredCustomersList(customersList);
      } else {
        setFilteredCustomersList(customersList.filter((c) => c.name.toLowerCase().includes(searchTerm.toLowerCase())))
      }
    };

    // Function to map data to HTML list
    const mapDataToHtmlList = (data : Person[]): JSX.Element[] => {
      return data.map((item, index) => (
        <li key={index}>{item.name}</li>
      ));
    };

    useEffect(() => {
      handleSearch();
      // Perform any action with the debounced value here, e.g., make an API call
    }, [debouncedSearchTerm]);
  
    return (       
      <div>
        <input
          type="text"
          placeholder="Enter your search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <h2>List of Items</h2>
        <ul>
          {mapDataToHtmlList(filteredCustomersList)}
        </ul>
      </div>
    );
  };

export default SearchList;