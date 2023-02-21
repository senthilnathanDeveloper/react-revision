// import logo from './logo.svg';
import { useState } from 'react';
import './App.scss';
import Dropdown from './DependentDropdown/Dropdown';
import List from './List';
import Select from './List/Select';
import Multiselect from './MultiSelect/Multiselect';

import Table from './Table';

const options = [
  { label: "TonyStart", value: 1 },
  { label: "ChrisEvent", value: 2 },
  { label: "ChirsHemsworth", value: 3 },
  { label: "MarkRuffalo", value: 4 },
  { label: "Jinner", value: 5 },
]
function App() {
  const [value1,setValue1] = useState([options[0]])
  return (
    <>
    {/* <Select  
        multiple
        options={options}
        value={value1}
        onChange={o => setValue1(o)}/> */}
        {/* <Multiselect/> */}
        <Dropdown/>
    </>
    // <Table/>
    // <List/>
  );
}

export default App;
