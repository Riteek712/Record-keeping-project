import './App.css';
import Header from './components/Header';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import AddIcon from '@mui/icons-material/Add'
import { useState } from 'react';
import RemoveCircleIcon from '@mui/icons-material/RemoveCircle';
// import Record from './components/Record';
function App() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [data, setData] = useState([])
  const addData = () => {
    setData([...data, { name, email }])
    setName("")
    setEmail("")
  }
  const removeRecord = (index) =>{
    let arr = data;
    arr.splice(index,1);
    setData([...arr]);
  }
  return (
    <div className="App">
      <Header />
      <section className='entry'>
        <Stack spacing={2} direction="row">
          <TextField
            value={name}
            onChange={
              (event) => setName(event.target.value)
            }
            id="outlined-basic"
            label="name"
            variant="outlined"
          />

          <TextField
            value={email}
            onChange={
              (event) => setEmail(event.target.value)
            }
            id="outlined-basic"
            label="email"
            variant="outlined"
          />

          <Button
            onClick={addData}
            variant="outlined"><AddIcon /></Button>
        </Stack>
      </section>
      <article className='records'>
        <h2>Current Records...</h2>
        <div className='record'>
          <h5>Name</h5>
          <h5>Email</h5>
          <h5>Remove</h5>
        </div>
        {
          data.map(
            (element, index) => {
              return (
                <div key={index} className='record'>
                  <h5>{element.name}</h5>
                  <h5>{element.email}</h5>
                  {/* <h5>{index}</h5> */}
                  <Button variant="contained" color='error'
                  onClick={() => removeRecord(index)}>
                    <RemoveCircleIcon />
                  </Button>
                </div>
              )
            }
          )
        }
      </article>
    </div>
  );
}

export default App;
