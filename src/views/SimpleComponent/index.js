function SimpleComponent() {
    console.log(this)    // undefined  babel编译后开启了严格模式
    return (
        <div>
            我是函数式组件，适用于简单组件的定义
        </div>
    )
}

export default SimpleComponent;
