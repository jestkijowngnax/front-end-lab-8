import React, { Component } from 'react';
import ListOfColors from './features/ListOfColors';
import ColorFilter from './features/ColorFilter';
import SelectedColors from './features/SelectedColors';
import AmountOfColorItems from './features/AmountOfColorItems';
import { hot } from 'react-hot-loader';

class App extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      list: [],
      currentList: [],
      selectedColors: [],
      currentSelectedColors: [],
      search: ""
    };

    this.addColors = this.addColors.bind(this);
    this.filterSearch = this.filterSearch.bind(this);
    this.removeColors = this.removeColors.bind(this);
  }
  
  filterSearch(inputValue) {
    let pattern = new RegExp(inputValue, 'i');
    let filteredList = this.state.list.filter((item) => {
        return pattern.test(item["tags"].toString())
    });
    this.setState({
        currentList: filteredList,
        search: inputValue
    });
  }

  addColors(colorItem) {
    if(this.state.selectedColors.length > 9) {
      return;
    }
    let index = this.state.list.indexOf(colorItem);
    let newList = this.state.list;
    newList.splice(index, 1);
    let newSelectedList = this.state.selectedColors;
    newSelectedList.push(colorItem);
    let newCurrentSelectedList = newSelectedList.length > 5 ? newSelectedList.slice(newSelectedList.length - 5) : newSelectedList
    this.setState({
      list: newList,
      selectedColors: newSelectedList,
      currentSelectedColors: newCurrentSelectedList
    });
    this.filterSearch(this.state.search);
  }

  removeColors(colorItem) {
    let newList = this.state.list;
    let newSelectedList = this.state.selectedColors;
    let index = newSelectedList.indexOf(colorItem);
    newSelectedList.splice(index, 1)
    newList.push(colorItem);
    this.sortedArr(newList);
    let newCurrentSelectedList = newSelectedList.length > 5 ? newSelectedList.slice(newSelectedList.length - 5) : newSelectedList
    this.setState({
      list: newList,
      selectedColors: newSelectedList,
      currentSelectedColors: newCurrentSelectedList
    });
    this.filterSearch(this.state.search);
  }

  sortedArr(arr) {
    arr.sort((a, b) => {
      return a.id - b.id;
    });
  } 

  componentDidMount() {
    fetch("https://epam-fe-homework-15.firebaseio.com/colors.json")
    .then(res => { return res.json();
    })
    .then(data => { let arr = data;
      this.sortedArr(arr);
      this.setState({
        list: arr,
        currentList: arr
      });
    })
  }

  render() {
    return (
      <div>
        <ColorFilter callback={this.filterSearch} />
        <SelectedColors list={this.state.currentSelectedColors} callback={this.removeColors} />
        <AmountOfColorItems number={this.state.currentList.length} />
        <ListOfColors list={this.state.currentList} callback={this.addColors} />
      </div>
    );
  }
}

export default hot(module)(App);