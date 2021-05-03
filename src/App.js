import React, { useState } from 'react';
import ResultPanel from './ResultPanel'
import Button from './Button'
import './css/App.min.css';

function App() {
  const [TopPanel, setTopPanel] = useState('');
  const [bottomPanel, setBottomPanel] = useState('');
  const [operator, setOperator] = useState([]);
  const [number, setNumber] = useState([])
  const [numClick, setNumClick] = useState('')

  return (
    <div className="App">
      <ResultPanel topPanel={TopPanel} bottomPanel={bottomPanel}/>
      <div className='delete'>
          <Button nameBtn='clear' setTopPanel={setTopPanel}  setBottomPanel={setBottomPanel} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
          <Button nameBtn='C' setTopPanel={setTopPanel}  setBottomPanel={setBottomPanel} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
          <Button nameBtn='CE' setTopPanel={setTopPanel}  setBottomPanel={setBottomPanel} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
      </div> 
      <div className='numbers'>
        <Button nameBtn={7} setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn={8} setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn={9} setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn={4} setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn={5} setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn={6} setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn={1} setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn={2} setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn={3} setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn={0} setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn='.' setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn='=' setTopPanel={setTopPanel} setBottomPanel={setBottomPanel} topPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick} number={number} operator={operator}/>
      </div>
      <div className='operation'>
      <Button nameBtn='[' setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
      <Button nameBtn=']' setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn='/' setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn='*' setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn='-' setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
        <Button nameBtn='+' setTopPanel={setTopPanel} setOperator={setOperator} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick}/>
      </div>
    </div>
  );
}

export default App;
