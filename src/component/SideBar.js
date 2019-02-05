import React from 'react';

class Sidebar extends React.Component {
  state = {
    query: '',
    searchResults: [],
  };

  updateQuery = (query) => {
    this.setState({ query: query }, this.searchLocations(query));
  };

  clearQuery = () => {
    this.setState({ query: '' });
  };

  searchLocations = (query) => {
    console.log(query);
  };

  render() {
    const { query, searchResults } = this.state;
    const { locations } = this.props;

    return (
      <div className="App-sidebar">
        <input
          className="App-search"
          type="text"
          placeholder="Search through locations..."
          value={query}
          onChange={(event) => {
            this.updateQuery(event.target.value);
          }}
        />
      </div>
    );
  }
}

export default Sidebar;
