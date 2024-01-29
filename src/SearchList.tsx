import { useState } from "react";
import { DATA, Person } from "./CustomersDB";

const SearchList: React.FC = () => {

  const [customersList, ] = useState<Person[]>(DATA);
  const [filteredCustomersList, setFilteredCustomersList] = useState<Person[]>(DATA);

  const [searchTerm, setSearchTerm] = useState<string>('');

    const handleSearch = () => {
      if (searchTerm === '') {
        setFilteredCustomersList(customersList);
      } else {
        setFilteredCustomersList(customersList.filter((c) => c.name.toLowerCase() === searchTerm.toLowerCase()))
      }
    };

    // Function to map data to HTML list
    const mapDataToHtmlList = (data : Person[]): JSX.Element[] => {
      return data.map((item, index) => (
        <li key={index}>{item.name}</li>
      ));
    };
  
    return (       
      <div>
        <input
          type="text"
          placeholder="Enter your search term"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button onClick={handleSearch}>Search</button>
        <h2>List of Items</h2>
        <ul>
          {mapDataToHtmlList(filteredCustomersList)}
        </ul>
      </div>
    );
  };

export default SearchList;