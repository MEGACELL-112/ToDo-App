const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
const element = <h1>Hello, Gambey</h1>;
function Welcome(props) {
    return <h1> Welcome, {props.name} give me {props.food}</h1>;
}
let Gambey = <Welcome name="Gambey" />
let Kampay = <Welcome name="Kampay" food="pizza" />
function City(props) {
    return <div>
        <h1>{props.name}</h1>
        <House color = "red" people = "white"></House>
        <House color = "green" people = "bad"></House>
        <House color = "yellow" people = "crazy"></House>
    </div>
}
function House(props) {
    return <div>
        <h1>{props.color} house with {props.people} people</h1>
    </div>
}
function Country(props) {
    return <div>
        <City name="Irkutsk" />
        <City name="Moscow" />
        <City name="Chelyabinsk" />
    </div>
}
root.render(<Country name="" />);