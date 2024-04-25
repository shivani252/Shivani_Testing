import { useState } from "react"

export default function StopWatch(){
    const [ms ,setMs] = useState(0);
    const [s ,setS] = useState(0);
    const [m ,setM] = useState(0);
    const [h ,setH] = useState(0);
    const [temp,setTemp] = useState(null);

    const start = () =>{
        clearInterval(temp);
        let t =  setInterval(()=>{
            setMs((ms)=>ms+1);
        },10)
        setTemp(t);
    }

    const restart = () =>{
        setMs((ms)=>ms=0);
        setS((s)=>s=0);
        setM((m)=>m=0);
        setH((h)=>h=0);
    }

    if(ms==100){
        setS((s)=>s+1);
        setMs((ms)=>ms=0);
    }
    if(s==60){
        setS((s)=>s=0);
        setM((m)=>m=m+1);
    }
    if(m==60){
        setM((m)=>m=0);
        setH((h)=>h=h+1);
    }
    const stop = () =>{
        clearInterval(temp);
    }
    return<>
        <div className="container mt-5">
            <div className="row">
                <div className="col-md-3">
                    <div>Mili Second : {ms}</div>
                </div>
                <div className="col-md-3">
                <div>Second : {s}</div>
                </div>
                <div className="col-md-3">
                <div>Mintue : {m}</div>
                </div>
                <div className="col-md-3">
                <div>Hour : {h}</div>
                </div>
            </div>
            <div className="row mt-4">
                <div className="col-md-4">
                    <button onClick={start} className="btn btn-primary"> Start</button>
                </div>
                <div className="col-md-4">
                    <button onClick={restart} className="btn btn-success"> Re-start</button>
                </div>
                <div className="col-md-4">
                    <button onClick={stop} className="btn btn-danger"> Stop</button>
                </div>
            </div>
        </div>
    </>
}