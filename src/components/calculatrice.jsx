import './calculatrice.css';
import { useState } from "react";

export function Calculatrice() {
  const [cpt,updateCpt] = useState("")
  function printMessage(){
    alert('hello');
  }
  function somme(){
   const sum = eval(cpt);
   updateCpt(sum); 
    
  }
    return <div >
       
<div className="calculator card center">

<input type="text" className="calculator-screen z-depth-1" value={cpt} disabled />


<div class="calculator-keys">

  <button type="button" className="operator btn btn-info" value="+" onClick={()=>updateCpt(cpt + "+" )}>+</button>
  <button type="button" className="operator btn btn-info" value="-" onClick={()=>updateCpt(cpt + "-" )}>-</button>
  <button type="button" className="operator btn btn-info" value="*" onClick={()=>updateCpt(cpt + "*" )}>&times;</button>
  <button type="button" className="operator btn btn-info" value="/" onClick={()=>updateCpt(cpt + "/" )}>&divide;</button>

  <button type="button" value="7" className="btn btn-light waves-effect" onClick={()=>updateCpt(cpt + "7" )}>7</button>
  <button type="button" value="8" className="btn btn-light waves-effect"onClick={()=>updateCpt(cpt + "8" )} >8</button>
  <button type="button" value="9" className="btn btn-light waves-effect"onClick={()=>updateCpt(cpt + "9" )}>9</button>


  <button type="button" value="4" className="btn btn-light waves-effect"onClick={()=>updateCpt(cpt + "4" )}>4</button>
  <button type="button" value="5" className="btn btn-light waves-effect"onClick={()=>updateCpt(cpt + "5" )}>5</button>
  <button type="button" value="6" className="btn btn-light waves-effect"onClick={()=>updateCpt(cpt + "6" )}>6</button>


  <button type="button" value="1" className="btn btn-light waves-effect" onClick={()=>updateCpt(cpt + 1 )}>1</button>
  <button type="button" value="2" className="btn btn-light waves-effect"onClick={()=>updateCpt(cpt + 2 )}>2</button>
  <button type="button" value="3" className="btn btn-light waves-effect"onClick={()=>updateCpt(cpt + 3 )}>3</button>


  <button type="button" value="0" className="btn btn-light waves-effect"onClick={()=>updateCpt(cpt + "0" )}>0</button>
  <button type="button" className="decimal function btn btn-secondary" value="."onClick={()=>updateCpt(cpt + "." )}>.</button>
  <button type="button" className="all-clear function btn btn-danger btn-sm" value="all-clear"onClick={()=>updateCpt(cpt = 0 )}>AC</button>

  <button type="button" className="equal-sign operator btn btn-default" value="="onClick={()=>somme()}>=</button>

</div>


</div>
  
      </div>
    }
  

  export default Calculatrice;