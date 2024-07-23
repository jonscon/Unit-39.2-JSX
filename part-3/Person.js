const MAX_NAME_LENGTH_TO_SHOW = 6;

const Person = ({ name, age, hobbies }) => {

    const hobbiesList = hobbies.map(hobby => <li>{hobby}</li>);

    return (
        <div>
            <p>Learn some more information about this person.</p>
            <p>Name: { name.length > 8 ? name.slice(0, MAX_NAME_LENGTH_TO_SHOW) : name }</p>
            <p>Age: { age }</p>
            <h3>{ +age < 18 ? "You must be 18 to vote!" : "Please go vote!" }</h3>
            <ul>Hobbies: { hobbiesList }</ul>
        </div>
    )
}