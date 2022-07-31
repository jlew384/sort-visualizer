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
import { SortAction, SortAnimation } from '../helpers/SortAnimation';
import { isArraySorted } from '../helpers/isArraySorted';
import '../styles/app.css';
import { BUBBLE_SORT, HEAP_SORT, INSERTION_SORT, MAX_ARRAY_SIZE, MAX_INTERVAL, MERGE_SORT, MIN_ARRAY_SIZE, MIN_INTERVAL, QUICK_SORT, SELECTION_SORT } from '../constants/global';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      array: generateRandomArray(MAX_ARRAY_SIZE),
      arraySize: MAX_ARRAY_SIZE,
      animateOn: false,
      animateIndex: -1,
      sortAction: "",
      actionIndexes: [],
      intervalTime: MIN_INTERVAL,
      sortMethodName: ""
    };
  }

  sort = (event) => {
    let array = this.state.array.slice();
    if(isArraySorted(array)) {
      array = generateRandomArray(array.length);
    }

    const sortMethodName = event.target.value;
    const animation = new SortAnimation(array);

    switch(sortMethodName) {
      case BUBBLE_SORT:
        this.playSortAnimation(bubbleSort(animation), sortMethodName);
        break;
      case SELECTION_SORT:
        this.playSortAnimation(selectionSort(animation), sortMethodName);
        break;
      case INSERTION_SORT:
        this.playSortAnimation(insertionSort(animation), sortMethodName);
        break;
      case MERGE_SORT:
        this.playSortAnimation(mergeSort(animation), sortMethodName);
        break;
      case QUICK_SORT:
        this.playSortAnimation(quickSort(animation), sortMethodName);
        break;
      case HEAP_SORT:
        this.playSortAnimation(heapSort(animation), sortMethodName);
        break;
    }
    
  }

  setSpeedAndSize(event) {
    const percent = event.target.value;

    const intervalRange = MAX_INTERVAL - MIN_INTERVAL;
    const intervalTime = MAX_INTERVAL - intervalRange * percent / 100;

    const arraySizeRange = MAX_ARRAY_SIZE - MIN_ARRAY_SIZE;
    const arraySize = Math.round(MIN_ARRAY_SIZE + arraySizeRange * percent / 100)


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
        actionIndexes: [],
        sortMethod: ""
      }; 
    });
  }

  playSortAnimation(anim, sortMethodName) {

    this.setState((prevState) => {
      if(prevState.animateIndex < 0 && !prevState.animateOn) {
        return {
          array: anim.array.slice(),
          animateOn: true,
          animateIndex: 0,
          sortMethodName: sortMethodName
        }
      }
    });
    
    this.animateInterval = setInterval(() => {
      console.log('hello');
      this.setState((prevState) => {
        if(prevState.animateIndex == anim.length) {
          // timeout to fix animation break on finish in safari
          setTimeout(clearInterval(this.animateInterval), 20);
          return {
            animateOn: false,
            animateIndex: -1
          }
        }
        else if(prevState.animateIndex < anim.length) {
          
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
          sortMethod={this.sort.bind(this)}
          sortMethodName={this.state.sortMethodName}
          setSpeedAndSize={this.setSpeedAndSize.bind(this)}
          animateOn={this.state.animateOn}
          resetArray={this.resetArray.bind(this)}
        />
        <Viewer array={this.state.array} actionIndexes={this.state.actionIndexes} sortAction={this.state.sortAction} />
      </div>
    );
  }  
}


export default App;
