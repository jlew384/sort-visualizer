import { SortAction } from "../helpers/SortAnimation"

export const Viewer = (props) => {
    let barWidth = 100 / props.array.length - 0.4;
    return (
        <div id="viewer">
            <div id="bar-container">
                {props.array.map((num, index, arr) => {
                    if(props.actionIndexes.includes(index)) {
                        if(props.sortAction == SortAction.Compare) {
                            return (<div key={index} className={"num compare"} style={{height: num + "%", width: barWidth + "%"}}></div>)
                        }
                        else if(props.sortAction == SortAction.Swap) {
                            return (<div key={index} className="num swap" style={{height: num + "%", width: barWidth + "%"}}></div>)
                        }
                        else {
                            return (<div key={index} className="num done" style={{height: num + "%", width: barWidth + "%"}}></div>)
                        }
                        
                    }
                    else {
                        return (<div key={index} className="num" style={{height: num + "%", width: barWidth + "%"}}></div>)
                    }
                })}
            </div>
        </div>
        
        )
}