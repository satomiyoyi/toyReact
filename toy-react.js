class ElementWraper {
    constructor(tagName) {
        this.root = document.createElement(tagName);
    }
    setAttribute(name, value) {
        this.root.setAttribute(name, value);
    }
    appendChild(elem) {
        this.root.appendChild(elem.root);
    }

}
class TextWraper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
}
// 组件基类
export class Component {
    constructor() {
        // 定义私有属性_root
        this._root = null;
        this.children = [];
        this.props = Object.create(null);
    }
    setAttribute(name, value) {
        this.props[name] = value;
    }
    appendChild(component) {
        this.children.push(component);
    }
    // root属性获取方法
    get root() {
        if (!this._root) {
            // 子类获取root不得 会调用自身render方法
            // render方法执行返回一段jsx语法 经过编译会自动调用createElement方法
            // 如果createElement方法第一个参数为组件那么继续递归，直到找到第一个参数为tagName的情况为止
            // 返回TextWraper 或者 ElementWraper类的实例为止
            this._root = this.render().root;
        }
        return this._root;
    }
}
export function createElement(tag, attributes, ...children) {
    let dom = null;
    if (typeof tag === 'string') {
        dom = new ElementWraper(tag);
    }
    else {
        dom = new tag();
    }
    for (let attr in attributes) {
        dom[attr] = attributes[attr];
    }
    // 递归插入元素（数组）
    let insertChildren = children => {
        for (let child of children) {
            // 文本节点创建文本节点即可
            if (typeof child === 'string') {
                child = new TextWraper(child);
            }
            // Component 实例children属性可能为数组 那么递归调用插入元素
            if (typeof child === 'object' && child instanceof Array) {
                insertChildren(child);
            }
            // 如果非文节点，也非数组，那人为是TextWraper或者elementWraper实例执行appendChild操作
            else {
                dom.appendChild(child);
            }
        }
    };
    insertChildren(children);
    return dom;
}

export function render(component, parentComponent) {
    parentComponent.appendChild(component.root);
}
