import {
    createElement,
    Component,
    render
} from './toy-react-1';

class MyComponent extends Component {
    constructor() {
        super();
        this.state = {
            a: 1,
            b: 2
        };
    }
    render() {
        return <div>
            <h1 id="a">my component</h1>
            <button onClick={() => {
                this.setState({ a: this.state.a++ });
            }}>click</button>
            <span>{this.state.a.toString()}</span>
            {this.children}
        </div>;
    }
}
let component = <MyComponent id="d">
    <span>abc</span>
    <span></span>
    <span></span>
</MyComponent>;
window.a = render(component, document.body);

// var body = document.getElementsByTagName('body')[0];
// body.appendChild(window.a);

