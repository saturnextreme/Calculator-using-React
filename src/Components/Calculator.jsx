import { useState, useEffect } from "react";
import "./Calculator.scss"

export const Calculator = () => {
    const [equation, setEquation] = useState("");
    const [showEquation, setShowEquation] = useState("");
    const [state, setState] = useState(true);

    useEffect(()=> {
        setShowEquation(equation);
    }, [state])

    const deletePrev = () => {
        let y = equation;
        let x = "";
        for(let i=0; i<y.length - 1; i++){
            x+=y[i];
        }
        setEquation(x);
    }

    const handleSubmit = () => {
        let operator = [];
        let x = equation;
        for (let i =0; i< x.length; i++) {
            if (/[+\-*\/]/.test(x[i])) {
                operator.push(x[i]);
            }
        }
        let question = equation.split(/[+\-*\/]/);
        let ans = parseFloat(question[0]);

        for(let i=0; i<operator.length; i++) {
            if (operator[i] == "+" ) {
                ans += parseFloat(question[i+1]);
            } else if (operator[i] == "-" ) {
                ans -= parseFloat(question[i+1]);
            } else if (operator[i] == "*" ) {
                ans *= parseFloat(question[i+1]);
            } else if (operator[i] == "/" ) {
                ans /= parseFloat(question[i+1]);
            }
        }
        if (isNaN(ans) || !(isFinite(ans))) {
            setEquation("INVALID SYNTAX");
        } else {
            setEquation(ans);
        }
        document.documentElement.style.setProperty("--bg-color", 'white');
    }

    return (
        <div className="screen">
            <div className="theme-switcher">
                <p>Theme</p>
                <input type="radio" name="t-s" className="theme a"></input>
                <input type="radio" name="t-s" className="theme b"></input>
                <input type="radio" name="t-s" className="theme c"></input>
            </div>
            <div className="cal-frame">
                <div className="cal-screen">
                    <div className="cal-sc top">{showEquation}</div>
                    <div className="cal-sc bottom">{equation}</div>
                </div>
                <div className="cal-btn">
                    <button className="sim-btn wl" value={"7"} onClick={()=>{setEquation(equation + "7" ); setState(!state)}}>7</button>
                    <button className="sim-btn wl" value={"8"} onClick={()=>{setEquation(equation + "8" ); setState(!state)}}>8</button>
                    <button className="sim-btn wl" value={"9"} onClick={()=>{setEquation(equation + "9" ); setState(!state)}}>9</button>
                    <button className="sim-btn bl" onClick={deletePrev}>DEL</button>
                    <button className="sim-btn wl" value={"4"} onClick={()=>{setEquation(equation + "4" ); setState(!state)}}>4</button>
                    <button className="sim-btn wl" value={"5"} onClick={()=>{setEquation(equation + "5" ); setState(!state)}}>5</button>
                    <button className="sim-btn wl" value={"6"} onClick={()=>{setEquation(equation + "6" ); setState(!state)}}>6</button>
                    <button className="sim-btn wl" value={"+"} onClick={()=>{setEquation(equation + "+" ); setState(!state)}}>+</button>
                    <button className="sim-btn wl" value={"1"} onClick={()=>{setEquation(equation + "1" ); setState(!state)}}>1</button>
                    <button className="sim-btn wl" value={"2"} onClick={()=>{setEquation(equation + "2" ); setState(!state)}}>2</button>
                    <button className="sim-btn wl" value={"3"} onClick={()=>{setEquation(equation + "3" ); setState(!state)}}>3</button>
                    <button className="sim-btn wl" value={"-"} onClick={()=>{setEquation(equation + "-" ); setState(!state)}}>-</button>
                    <button className="sim-btn wl" value={"."} onClick={()=>{setEquation(equation + "." ); setState(!state)}}>.</button>
                    <button className="sim-btn wl" value={"0"} onClick={()=>{setEquation(equation + "0" ); setState(!state)}}>0</button>
                    <button className="sim-btn wl" value={"/"} onClick={()=>{setEquation(equation + "/" ); setState(!state)}}>/</button>
                    <button className="sim-btn wl" value={"*"} onClick={()=>{setEquation(equation + "*" ); setState(!state)}}>*</button>
                    <button className="sim-btn x bl" onClick={()=>{setEquation(""); setShowEquation("")}}>RESET</button>
                    <button className="sim-btn y rl" onClick={handleSubmit}>=</button>
                </div>
            </div>
        </div>
    )
}
