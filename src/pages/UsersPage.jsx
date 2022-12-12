import SingleUser from '../components/users/SingleUser';
import useFetch from '../hooks/useFetch';
import { useState } from 'react';

function UsersPage(props) {
  const [usersArr, setUsersArr] = useFetch();
  const [searchTerm, setSearchTerm] = useState('');
  const [selectValue, setSelectValue] = useState('paris');
  //console.log('usersArr ===', usersArr);

  // case sensitive
  // const filteredUsers = usersArr.filter((uObj) =>
  //   uObj.name.includes(searchTerm)
  // );
  // case insensitive
  const filteredUsers = usersArr.filter((uObj) =>
    uObj.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  function beSearch() {
    let url = `http://localhost:8001/users?q=${searchTerm}`;
    fetch(url)
      .then((resp) => resp.json())
      .then((gotData) => setUsersArr(gotData))
      .catch((err) => console.warn('beSearch klaida', err));
  }

  const beOrFe = true ? filteredUsers : usersArr;

  // use reduce, map filter to get all different towns
  
//!
  const sortByTown = usersArr.filter((uObj) =>
    uObj.town.toLowerCase().includes(selectValue.toLowerCase())
  );

  console.log('sortByTown ===', sortByTown);
  // console.log('usersArr ===', JSON.stringify(usersArr));

  return (
    <div>
      <h1>Our users</h1>
      <fieldset>
        <legend>filter out</legend>
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          type='search'
          placeholder='Search'
        />
        <button onClick={beSearch}>Back end filter</button>
      </fieldset>
      <p>You have searched for: {searchTerm}</p>
      <hr />
      <fieldset>
        <legend>Select town</legend>
        <select
          onChange={(e) => setSelectValue(e.target.value)}
          value={selectValue}
        >
          <option value='london'>London</option>
          <option value='paris'>Paris</option>
          <option value='neveronys'>Neveronys</option>
          <option value='kaunas'>Kaunas</option>
          <option value='capetown'>Capetown</option>
          <option value='birmingam'>Birmingam</option>
        </select>
        <h3>Selected: {selectValue}</h3>
      </fieldset>

      {/* <ul className='unlisted grid'>
        {beOrFe.map((uObj) => (
          <SingleUser key={uObj.id} {...uObj} />
        ))}
      </ul> */}

      <ul className='unlisted grid'>
        {sortByTown.map((uObj) => (
          <SingleUser key={uObj.id} {...uObj} />
        ))}
      </ul>
    </div>
  );
}
export default UsersPage;

const allArr = [
  {
    name: 'James Bond 007',
    town: 'Birmingam',
    age: '29',
    id: 1,
    archived: false,
  },
  { name: 'Jill Krown', town: 'Dublin', age: '34', id: 2, archived: false },
  { id: 3, name: 'Mike', age: 31, town: 'Capetown', archived: false },
  { id: 4, name: 'Serbentautas', age: 18, town: 'Neveronys', archived: false },
  {
    name: 'Serbentautas Bordiuras',
    age: 18,
    town: 'Neveronys',
    id: 5,
    archived: true,
  },
  {
    name: 'Serbentautas Bordiuras',
    town: 'Serbija',
    age: 35,
    id: 6,
    archived: true,
  },
  { name: 'Serbentautas', age: 18, town: 'Neveronys', id: 7, archived: false },
  { name: 'Lenteja', town: 'Neveronys', age: '25', id: 8, archived: true },
  { name: 'Grafas Kazkas', town: 'Kaunas', age: '35', archived: false, id: 9 },
];
