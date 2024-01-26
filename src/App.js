import Home from "./Pages/Home";


let players = [
    {
        "key": 0,
        "name": 'henrik',
        "age": 4
    },
    {
        "key": 1,
        "name": 'hanne',
        "age": 20
    }
];


function App() {
    return (
        <div className="App">
            <Home
                array={playesr}
            />
        </div>
    );
}

export default App;