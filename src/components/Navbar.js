export const Navbar = (props) => {
  return (
    <div id="navbar">
      <div id="sort-btn-container">
        <p>Sort Methods:</p>
        <div>
          <button disabled={props.animateOn} onClick={props.bubbleSort}  className={props.sortMethod == "bubble" ? "selected btn" : ''}>Bubble</button>
          <button disabled={props.animateOn} onClick={props.selectionSort} className={props.sortMethod == "selection" ? "selected btn" : ''}>Selection</button>
          <button disabled={props.animateOn} onClick={props.insertionSort} className={props.sortMethod == "insertion" ? "selected btn" : ''}>Insertion</button>
          <button disabled={props.animateOn} onClick={props.mergeSort} className={props.sortMethod == "merge" ? "selected btn" : ''}>Merge</button>
          <button disabled={props.animateOn} onClick={props.quickSort} className={props.sortMethod == "quick" ? "selected btn" : ''}>Quick</button>
          <button disabled={props.animateOn} onClick={props.heapSort} className={props.sortMethod == "heap" ? "selected btn" : ''}>Heap</button>
        </div>
        
      </div>      
      
      <div id="settings-container">
        <p>Size and Speed:</p>
        <input disabled={props.animateOn} onChange={props.setSpeed} type="range" id="speed" name="points" defaultValue="100" min="0" max="100" />        
      </div>
      <button onClick={props.resetArray}>New Array</button>
      
    </div>
  )
}