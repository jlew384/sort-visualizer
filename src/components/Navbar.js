export const Navbar = (props) => {
  return (
    <div id="navbar">
      <button onClick={props.resetArray}>Reset Array</button>
      
      <div id="settings-container">        
        <label for="speed">Size and Speed:</label>
        <input disabled={props.animateOn} onChange={props.setSpeed} type="range" id="speed" name="points" defaultValue="100" min="0" max="100" />
      </div>

      <div id="sort-btn-container">
        <p>Sort Methods:</p>
        <button disabled={props.animateOn} onClick={props.bubbleSort}>Bubble</button>
        <button disabled={props.animateOn} onClick={props.selectionSort}>Selection</button>
        <button disabled={props.animateOn} onClick={props.insertionSort}>Insertion</button>
        <button disabled={props.animateOn} onClick={props.mergeSort}>Merge</button>
        <button disabled={props.animateOn} onClick={props.quickSort}>Quick</button>
        <button disabled={props.animateOn} onClick={props.heapSort}>Heap</button>
      </div>
    </div>
  )
}