const NamedComponent = ({ name }) => {
    return <p>My name is { name }</p>
};

ReactDOM.render(<NamedComponent name="Jonathan" />,
    document.getElementById("root"));



