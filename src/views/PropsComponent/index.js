import Child from './child';

function PropsComponent() {
    const p = { name: 'tt', age: 34, sex: '男' }
    // return <Child name="tom" age="12" sex="女" />;
    return <Child { ...p} />;
}

export default PropsComponent;
