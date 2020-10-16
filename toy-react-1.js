const RENDER_TO_DOM = Symbol('renderToDom');
class ElementWraper {
    constructor(tagName) {
        this.root = document.createElement(tagName);
    }
    setAttribute(name, value) {
        // 如果属性为onClick 单独识别
        // 绑定事件，建立监听方法
        if (name.match(/^on([\s\S]+)$/)) {
            this.root.addEventListener(RegExp.$1.toLowerCase(), value);
        }
        else {
            if (name === 'className') {
                name = 'class';
            }
            this.root.setAttribute(name, value);
        }
    }
    appendChild(elem) {
        let range = document.createRange();
        range.setStart(this.root, this.root.childNodes.length);
        range.setEnd(this.root, this.root.childNodes.length);
        elem[RENDER_TO_DOM](range);
    }
    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }

}
class TextWraper {
    constructor(content) {
        this.root = document.createTextNode(content);
    }
    [RENDER_TO_DOM](range) {
        range.deleteContents();
        range.insertNode(this.root);
    }
}
// 组件基类
export class Component {
    constructor() {
        // 定义私有属性_root
        this._root = null;
        this.children = [];
        this.props = Object.create(null);
        this._range = null;
        this.state = null;
    }
    setAttribute(name, value) {
        this.props[name] = value;
    }
    appendChild(component) {
        this.children.push(component);
    }
    // 打破root的思路使用range进行dom插入
    // 私有方法
    [RENDER_TO_DOM](range) {
        this._range = range;
        range.deleteContents();
        range.insertNode(this.render().root);
    }
    // // root属性获取方法
    // get root() {
    //     if (!this._root) {
    //         // 子类获取root不得 会调用自身render方法
    //         // render方法执行返回一段jsx语法 经过编译会自动调用createElement方法
    //         // 如果createElement方法第一个参数为组件那么继续递归，直到找到第一个参数为tagName的情况为止
    //         // 返回TextWraper 或者 ElementWraper类的实例为止
    //         this._root = this.render().root;
    //     }
    //     return this._root;
    // }
    rerender() {
        // range会相邻合并，会造成从左向右点击棋子的时候部分棋盘丢失。
        // 创建插入range
        let range = document.createRange();
        // 保存老的range
        let oldRange = this._range;
        // 在老range之前
        range.setStart(oldRange.startContainer, this._range.startOffset);
        range.setEnd(oldRange.startContainer, this._range.startOffset);
        this[RENDER_TO_DOM](range);
        // 因为插入了没有内容的新range，因此也会扩充到老的range里面
        // 所以要重新定义老range的开始位置
        oldRange.setStart(range.endContainer, range.endOffset);
        // 删除老range内容
        oldRange.deleteContents();
    }
    setState(newState) {
        if (this.state === null || typeof this.state !== 'object') {
            this.state = newState;
            this.rerender();
            return;
        }
        let merge = (oldState, newState) => {
            for (let p in newState) {
                if (oldState !== null || typeof oldState[p] !== 'object') {
                    oldState[p] = newState[p];

                }
                else {
                    merge(oldState[p], newState[p]);
                }
            }
        };
        merge(this.state, newState);
        this.rerender();
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
        dom.setAttribute(attr, attributes[attr]);
    }
    // 递归插入元素（数组）
    let insertChildren = children => {
        for (let child of children) {
            // 文本节点创建文本节点即可
            if (typeof child === 'string') {
                child = new TextWraper(child);
            }
            if (child === null) {
                continue;
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
    // render 方法并不是只有appendChild一种情况，同时需要位置信息
    // dom api中range api是跟位置相关的
    // parentComponent.appendChild(component.root);
    let range = document.createRange();
    range.setStart(parentComponent, 0);
    range.setEnd(parentComponent, parentComponent.childNodes.length);
    component[RENDER_TO_DOM](range);
}
