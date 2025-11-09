import CounterButton from "./CounterButton.tsx";
import {useCounterwithReducer} from "../hooks/useCounterwithReducer.ts";

const CounterWithCustomHook = () => {

// custom hook function
    const {count, lastAction, time, increase, decrease, reset} = useCounterwithReducer();

    return (



        <>
            <div className="space-y-4 text-xl pt-12">
                <h1 className="text-center">Count is {count} </h1>
                <div className="text-center space-x-4">

                    <CounterButton onClick={increase} label={"Increase"}/>
                    <CounterButton onClick={decrease} disabled={count===0} label={"Decrease"}/>
                    <CounterButton onClick={reset} disabled={count===0} label={"Reset"} addClass={"bg-scope-red"}/>

                </div>
            </div>

            <p className="text-center pt-8">Last change: <strong>{lastAction || "-"}</strong> at <strong>{time || "-"}</strong></p>
        </>


    )
}


export default CounterWithCustomHook;