import {
    createElement,
    Component,
    render
} from './toy-react';

class MyComponent extends Component {
    render() {
        return <div>
            <h1>my component</h1>
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

