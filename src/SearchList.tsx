import { DATA, Person } from "./CustomersDB";

const SearchList: React.FC = () => {
    // Function to map data to HTML list
    const mapDataToHtmlList = (data : Person[]): JSX.Element[] => {
      return data.map((item, index) => (
        <li key={index}>{item.name}</li>
      ));
    };
  
    return (
      <div>
        <h2>List of Items</h2>
        <ul>
          {mapDataToHtmlList(DATA)}
        </ul>
      </div>
    );
  };

export default SearchList;