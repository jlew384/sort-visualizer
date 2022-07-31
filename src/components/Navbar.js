import { BUBBLE_SORT, HEAP_SORT, INSERTION_SORT, MERGE_SORT, QUICK_SORT, SELECTION_SORT } from "../constants/global"

export const Navbar = (props) => {
  return (
    <div id="navbar">
      <div id="sort-btn-container">
        <p>Sort Methods:</p>
        <div>
          <button 
            disabled={props.animateOn} 
            onClick={props.sortMethod}
            value={BUBBLE_SORT}  
            className={props.sortMethodName == BUBBLE_SORT ? "selected" : ''}>
              Bubble
          </button>
          <button 
            disabled={props.animateOn} 
            onClick={props.sortMethod}
            value={SELECTION_SORT} 
            className={props.sortMethodName == SELECTION_SORT ? "selected" : ''}>Selection</button>
          <button 
            disabled={props.animateOn} 
            onClick={props.sortMethod}
            value={INSERTION_SORT} 
            className={props.sortMethodName == INSERTION_SORT ? "selected" : ''}>Insertion</button>
          <button 
            disabled={props.animateOn} 
            onClick={props.sortMethod}
            value={MERGE_SORT} 
            className={props.sortMethodName == MERGE_SORT ? "selected" : ''}>Merge</button>
          <button 
            disabled={props.animateOn} 
            onClick={props.sortMethod} 
            value={QUICK_SORT} 
            className={props.sortMethodName == QUICK_SORT ? "selected" : ''}>Quick</button>
          <button 
            disabled={props.animateOn} 
            onClick={props.sortMethod}
            value={HEAP_SORT} 
            className={props.sortMethodName == HEAP_SORT ? "selected" : ''}>Heap</button>
        </div>
        
      </div>      
      
      <div id="settings-container">
        <p>Size and Speed:</p>
        <input disabled={props.animateOn} onChange={props.setSpeedAndSize} type="range" id="speed" name="points" defaultValue="100" min="0" max="100" />        
      </div>
      <button onClick={props.resetArray}>New Array</button>
      
    </div>
  )
}