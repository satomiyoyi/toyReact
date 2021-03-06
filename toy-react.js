const RENDER_TO_DOM = Symbol('renderToDom');

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
        // 将旧的vdom存起来
        this._vdom = this.vdom;
        // range.deleteContents();
        // range.insertNode(this.render().root);
        // this.render()[RENDER_TO_DOM](range);
        // 旧的vdom更新成range的内容
        this._vdom[RENDER_TO_DOM](range);
    }
    update() {
        // 根节点相同对比
        function isSameNode(oldNode, newNode) {
            if (oldNode.type !== newNode.type) {
                return false;
            }
            for (let name in newNode.props) {
                if (newNode.props[name] === oldNode.props[name]) {
                    return false;
                }
            }
            if (Object.keys(newNode).length < Object.keys(oldNode).length) {
                return false;
            }
            if (newNode.type === '#text') {
                return newNode.content === oldNode.content;
            }
            return true;
        }
        // 相同位置节点不同则更新
        let update = (oldNode, newNode) => {
            // 对比内容：type props children
            // text节点还需看content
            if (!isSameNode(oldNode, newNode)) {
                newNode[RENDER_TO_DOM](oldNode._range);
                return;
            }
            newNode._range = oldNode._range;
            // 处理children
            let newChildren = newNode.vchildren;
            let oldChildren = oldNode.vchildren;

            if (!newChildren || !oldChildren) {
                return;
            }

            let tailRange = oldChildren[oldChildren.length - 1]._range;

            for (let i = 0; i < newChildren.length; i++) {
                let newChild = newChildren[i];
                let oldChild = oldChildren[i];
                if (i < oldChildren.length) {
                    update(oldChild, newChild);
                }
                else {
                    // todo
                    // oldChild数量少则执行插入
                    // 创建插入空range到尾部
                    let range = document.createRange();
                    range.setStart(tailRange.endContainer, tailRange.endOffset);
                    range.setEnd(tailRange.endContainer, tailRange.endOffset);
                    // newChild添加到空rang当中
                    newChildren[RENDER_TO_DOM](range);
                    // tailRang指向尾巴
                    tailRange = range;
                }
            }
        };
        let vdom = this.vdom;
        update(this._vdom, vdom);
        // update之后旧的替换成新的
        this._vdom = vdom;
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
    // 不再是重新渲染，而是vdom更新
    // rerender() {
    //     // range会相邻合并，会造成从左向右点击棋子的时候部分棋盘丢失。
    //     // 创建插入range
    //     let range = document.createRange();
    //     // 保存老的range
    //     let oldRange = this._range;
    //     // 在老range之前
    //     range.setStart(oldRange.startContainer, this._range.startOffset);
    //     range.setEnd(oldRange.startContainer, this._range.startOffset);
    //     this[RENDER_TO_DOM](range);
    //     // 因为插入了没有内容的新range，因此也会扩充到老的range里面
    //     // 所以要重新定义老range的开始位置
    //     oldRange.setStart(range.endContainer, range.endOffset);
    //     // 删除老range内容
    //     oldRange.deleteContents();
    // }
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
        // this.rerender();
        // state结果改变则需要重新render，没有render了则需要update
        this.update();
    }
    get vdom() {

        return this.render().vdom;
    }
}
function replaceContent(range, node) {
    range.insertNode(node);
    range.setStartAfter(node);
    range.deleteContents();
    range.setStartBefore(node);
    range.setEndAfter(node);
}
class ElementWraper extends Component {
    constructor(tagName) {
        super(tagName);
        // this.root = document.createElement(tagName);
        this.type = tagName;
    }
    // setAttribute(name, value) {
    //     // 如果属性为onClick 单独识别
    //     // 绑定事件，建立监听方法
    //     if (name.match(/^on([\s\S]+)$/)) {
    //         this.root.addEventListener(RegExp.$1.toLowerCase(), value);
    //     }
    //     else {
    //         if (name === 'className') {
    //             name = 'class';
    //         }
    //         this.root.setAttribute(name, value);
    //     }
    // }
    // appendChild(elem) {
    //     let range = document.createRange();
    //     range.setStart(this.root, this.root.childNodes.length);
    //     range.setEnd(this.root, this.root.childNodes.length);
    //     elem[RENDER_TO_DOM](range);
    // }
    [RENDER_TO_DOM](range) {
        this._range = range;
        // range.deleteContents();
        let root = document.createElement(this.type);
        for (let name in this.props) {
            let value = this.props[name];
            if (name.match(/^on([\s\S]+)$/)) {
                root.addEventListener(RegExp.$1.toLowerCase(), value);
            }
            else {
                if (name === 'className') {
                    name = 'class';
                }
                root.setAttribute(name, value);
            }
        }
        if (this.vchildren) {
            // 为啥还在这赋值一遍？
            this.vchildren = this.children.map(child => child.vdom);
        }
        for (let child of this.vchildren) {
            let childRange = document.createRange();
            childRange.setStart(root, root.childNodes.length);
            childRange.setEnd(root, root.childNodes.length);
            child[RENDER_TO_DOM](childRange);
        }

        replaceContent(range, root);
        // range.insertNode(root);
    }
    get vdom() {
        // return {
        //     type: this.type,
        //     props: this.props,
        //     children: this.children.map(child => child.vdom)
        // };
        this.vchildren = this.children.map(child => child.vdom);
        return this;
    }

}
class TextWraper extends Component {
    constructor(content) {
        super(content);
        // this.root = document.createTextNode(content);
        this.content = content;
        this.type = '#text';
    }
    [RENDER_TO_DOM](range) {
        this._range = range;
        let root = document.createTextNode(this.content);
        replaceContent(range, root);
        // range.deleteContents();
        // range.insertNode(root);
    }
    get vdom() {
        // return {
        //     type: '#text',
        //     content: this.content
        // };
        return this;
    }
}
// 组件基类
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
