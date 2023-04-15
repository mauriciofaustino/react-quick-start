import './App.css';
import Profile from './Profile';
import TicTacToe from "./TicTacToe";
import {useState} from 'react'

function AboutPage() {
    return (
        <>
            <h2>About Page</h2>
            <p>Hello there, <br/> How do you do?</p>
        </>
    )
}

function MyButton({count, onClick}) {
    return (
        <button onClick={onClick}>Clicked {count} times</button>
    )
}

function App() {
    const [count, setCount] = useState(0)

    function handleClick() {
        setCount(count + 1)
    }

    return (
        <div className="App">
            <h1>Welcome to my App</h1>
            <AboutPage/>
            <Profile/>
            <br/>
            <MyButton onClick={handleClick} count={count}/>
            <MyButton onClick={handleClick} count={count}/>
            <hr />
            <TicTacToe />
        </div>
    );
}

export default App;
