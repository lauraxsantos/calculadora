import React, {useState} from 'react';
import Display from "../display/Display";
import Button from "../buttons/Button";
import "./calculadora.css"

export default function Calculadora(){
    const[num, setNum] = useState(0);
    const[prevNum, setPrevNum] = useState()
    const[operator, setOperator] = useState()
    const[memory, setMemory] = useState();
    const[usingMemory, setUsingMemory] = useState(false);
    const[first, setFirst] = useState(true);

    function inputNum(e){
        var input = e.target.value;
        if (first) {
            setNum(input)            
            setFirst(false)
        } else{
            setNum(num + input)
        }
    }

    function clear(){
        setNum(0);
        setPrevNum(0)
        setOperator("")
        setFirst(true)
    }
    
    function operatorHandler(e){
        var operatorInput = e.target.value;
        setOperator(operatorInput);
        setPrevNum(num);
        setFirst(true);
        calculate();
    }

    function calculate(){
        var result;
        if (operator === "/" ) {
            result = (parseFloat(prevNum) / parseFloat(num)); 
            setPrevNum(result)
            setNum(result)
        } else if (operator === "+" ) {
            result = (parseFloat(prevNum) + parseFloat(num)); 
            setPrevNum(result);
            setNum(result);         
        } else if (operator === "-" ) {
            result = (parseFloat(prevNum) - parseFloat(num));
            setPrevNum(result);
            setNum(result);     
        } else if (operator === "X" ) {
            result = (parseFloat(prevNum) * parseFloat(num)); 
            setPrevNum(result);
            setNum(result);
        } else if (operator === "="){
            setPrevNum(num);
        }
    }

    function recallMemory(){
        if (memory === undefined){
            setNum(0)
        } else{
            setNum(memory);
        }
    }

    function addMemory(){
        setUsingMemory(true)
        if (memory === undefined) {
            setMemory(num)            
        } else{
            setMemory(parseFloat(memory) + parseFloat(num))
        }
        setNum(0)
    }
    function subMemory(){
        setMemory(parseFloat(memory) - parseFloat(num));
    }

    function clearMemory(){
        setMemory(0);
        setUsingMemory(false)
    }

    return(
        <div className="wrapper">
            <div className="calc">
                <Display m={usingMemory} result={num}></Display>
                <div className="container">
                    <Button operation={recallMemory} type={"memory"} textButton={"MR"}></Button>
                    <Button operation={clearMemory} type={"memory"} textButton={"MC"}></Button>
                    <Button operation={addMemory} type={"memory"} textButton={"M+"}></Button>
                    <Button operation={subMemory} type={"memory"} textButton={"M-"}></Button>
                    <Button operation={inputNum} type={"number"} textButton={7}></Button>
                    <Button operation={inputNum} type={"number"} textButton={8}></Button>
                    <Button operation={inputNum} type={"number"} textButton={9}></Button>
                    <Button operation={clear} type={"func"} textButton={"C"}></Button>
                    <Button operation={inputNum} type={"number"} textButton={6}></Button>
                    <Button operation={inputNum} type={"number"} textButton={4}></Button>
                    <Button operation={inputNum} type={"number"} textButton={5}></Button>
                    <Button operation={operatorHandler} type={"func"} textButton={"X"}></Button>
                    <Button operation={inputNum} type={"number"} textButton={1}></Button>
                    <Button operation={inputNum} type={"number"} textButton={2}></Button>
                    <Button operation={inputNum} type={"number"} textButton={3}></Button>
                    <Button operation={operatorHandler} type={"func"} textButton={"-"}></Button>
                    <Button operation={inputNum} type={"number"} textButton={0}></Button>
                    <Button operation={inputNum} type={"number"} textButton={"."}></Button>
                    <Button operation={operatorHandler} type={"func"} textButton={"/"}></Button>
                    <Button operation={operatorHandler} type={"func"} textButton={"+"}></Button>
                    <Button operation={operatorHandler} type={"func"} textButton={"="}></Button>
                </div>
            </div>
        </div>
    )
}  