import {useStore} from "store";

export const HomePage = () => {
    const counter = useStore(state => state.counter);
    const count = useStore(state => state.count);
    const discount = useStore(state => state.discount);

    return (
        <div className="grid h-dvh place-content-center gap-4">
            <h1 className="text-4xl font-bold ">Home Page</h1>

            <div className="flex items-center gap-4 border border-blue-500 w-[min-content] mx-auto rounded-full overflow-hidden">
                <button className="w-8 h-6 bg-blue-500 p-2 text-white grid place-content-center leading-none" onClick={discount}>-</button>
                <h2 className="w-8 text-center">{counter}</h2>
                <button className="w-8 h-6 bg-blue-500 p-2 text-white grid place-content-center leading-none" onClick={count}>+</button>
            </div>
        </div>
    )
}