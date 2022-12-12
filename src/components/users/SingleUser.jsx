function SingleUser({ age, town, name }) {
    return (
      <li className='card'>
        <h3>{name}</h3>
        <p>town: {town}</p>
        <p>age: {age}</p>
      </li>
    );
  }
  export default SingleUser;
  