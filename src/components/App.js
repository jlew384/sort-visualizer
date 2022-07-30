import React from 'react';
import { Navbar } from './Navbar';
import { Viewer } from './Viewer';
import { bubbleSort } from '../sorting-algorithms/bubbleSort';
import { selectionSort } from '../sorting-algorithms/selectionSort';
import { insertionSort } from '../sorting-algorithms/insertionSort';
import { mergeSort } from '../sorting-algorithms/mergeSort';
import { quickSort } from '../sorting-algorithms/quickSort';
import { heapSort } from '../sorting-algorithms/heapSort';
import { generateRandomArray } from '../helpers/generateRandomArray';
import { SortAction } from '../helpers/SortAnimation';
import '../styles/app.css';

class App extends React.Component {
  constructor(props) {
    super(props);

    const defaultArraySize = 80;
    const defaultArray = generateRandomArray(defaultArraySize);

    this.state = {
      array: defaultArray,
      arraySize: defaultArraySize,
      animateOn: false,
      animateIndex: -1,
      sortAction: "",
      actionIndexes: [],
      intervalTime: 10,
      
    };

    this.heapSort = this.heapSort.bind(this);
    this.quickSort = this.quickSort.bind(this);
    this.mergeSort = this.mergeSort.bind(this);
    this.insertionSort = this.insertionSort.bind(this);
    this.selectionSort = this.selectionSort.bind(this);
    this.bubbleSort = this.bubbleSort.bind(this);
    this.resetArray = this.resetArray.bind(this);
  }

  bubbleSort = () => this.animateSort(bubbleSort(this.state.array));
  selectionSort = () => this.animateSort(selectionSort(this.state.array));
  insertionSort = () => this.animateSort(insertionSort(this.state.array));
  mergeSort = () => this.animateSort(mergeSort(this.state.array));
  quickSort = () => this.animateSort(quickSort(this.state.array));
  heapSort = () => this.animateSort(heapSort(this.state.array));

  setSpeed(event) {
    console.log([event.target.value]);
    const percent = event.target.value;
    const minIntervalTime = 5;
    const maxIntervalTime = 600;
    const intervalRange = maxIntervalTime - minIntervalTime;
    const intervalTime = maxIntervalTime - intervalRange * percent / 100;

    
    const minArraySize = 6;
    const maxArraySize = 80;
    const arraySizeRange = maxArraySize - minArraySize;
    const arraySize = Math.round(minArraySize + arraySizeRange * percent / 100)


    this.setState({
      array: generateRandomArray(arraySize),
      intervalTime: intervalTime,
      actionIndexes: [],
      sortAction: "",
      arraySize: arraySize
    })
  }

  resetArray() {
    clearInterval(this.animateInterval);
    this.setState((prevState) => {
      return {
        array: generateRandomArray(prevState.arraySize),
        animateOn: false,
        animateIndex: -1,
        sortAction: "",
        actionIndexes: []
      }; 
    });
  }

  checkIfSorted(arr) {
    for(let i = 1; i < arr.length; i++) {
      if(arr[i] < arr[i - 1]) {
        return false;
      }
    }
    return true;
  }

  animateSort(anim) {
    if(this.checkIfSorted(this.state.array)) {
      this.resetArray();
      return;
    }

    this.setState((prevState) => {
      if(prevState.animateIndex < 0 && !prevState.animateOn) {
        return {
          animateOn: true,
          animateIndex: 0
        }
      }
    });
    
    this.animateInterval = setInterval(() => {
      this.setState((prevState) => {
        if(prevState.animateIndex > anim.length - 1) {
          clearInterval(this.animateInterval);
          return {
            animateOn: false,
            animateIndex: -1
          }
        }
        else {
          let step = anim.getStep(prevState.animateIndex);
          let arr = prevState.array.slice();
          if(step.action == SortAction.Swap) {
            let temp = arr[step.indexes[0]];
            arr[step.indexes[0]] = arr[step.indexes[1]];
            arr[step.indexes[1]] = temp;
          }
          return {
            sortAction: step.action,
            animateIndex: prevState.animateIndex + 1,
            array: arr,
            actionIndexes: step.indexes
          }
        }        
      })
    }, this.state.intervalTime)
  }  

  render() {
    return (
      <div id="app">        
        <Navbar 
          setSpeed={this.setSpeed.bind(this)}
          animateOn={this.state.animateOn}
          resetArray={this.resetArray}
          bubbleSort={this.bubbleSort}
          selectionSort={this.selectionSort} 
          insertionSort={this.insertionSort}
          mergeSort={this.mergeSort}
          quickSort={this.quickSort}
          heapSort={this.heapSort}
        />
        <Viewer array={this.state.array} actionIndexes={this.state.actionIndexes} sortAction={this.state.sortAction} />
      </div>
    );
  }  
}


export default App;
