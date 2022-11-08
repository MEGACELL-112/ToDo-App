const root = ReactDOM.createRoot(
    document.getElementById('root')
);
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            // массив в котором выводится список дел
            items:[
                {
                    text: "Слетать в космос",
                },
                {
                    text: "Купить хамелеона"
                }
            ],
            text:"",
            h1:"", 
        }
    }

    getCycle(){
        for (let i = "ха"; i.length < 10; i= i + "ха") {
            console.log(i);            
        }
    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state.text);
        this.setState({h1: "кот"})
    }

    render(){
        return(
            <form action="" onSubmit = {(event) => this.handleSubmit(event)}>
                <h1 onClick = {()=> this.getCycle()}>Список дел {this.state.h1}</h1>
                <ol>
                    {
                        this.state.items.map((item) => (
                            <li>{item.text}</li>
                        ))
                    }
                </ol>
                    <input type="text" value = {this.state.text} onChange = { (event)=> this.setState({text:event.target.value})}/>
                    <button>Добавить</button>
            </form>
        )
    }
}
root.render(<App />);
