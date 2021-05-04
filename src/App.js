import React, { useState } from 'react';
import ResultPanel from './ResultPanel'
import Button from './Button'
import './css/App.min.css';

function App() {
  const [TopPanel, setTopPanel] = useState('');
  const [bottomPanel, setBottomPanel] = useState('');
  const [number, setNumber] = useState([])
  const [numClick, setNumClick] = useState('')

  return (
    <div className="App">
      <ResultPanel topPanel={TopPanel} bottomPanel={bottomPanel}/>
      <div className='delete'>
          <Button nameBtn='clear' setTopPanel={setTopPanel}  setBottomPanel={setBottomPanel} setNumber={setNumber} setNumClick={setNumClick} />
      </div> 
      <div className='numbers'>
        <Button nameBtn={7} setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn={8} setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn={9} setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn={4} setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn={5} setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn={6} setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn={1} setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn={2} setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn={3} setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn={0} setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn='.' setNumClick={setNumClick} setTopPanel={setTopPanel} type={'number'}/>
        <Button nameBtn='=' setBottomPanel={setBottomPanel} setNumber={setNumber} setNumClick={setNumClick} numClick={numClick} number={number} />
      </div>
      <div className='operation'>
        <Button nameBtn='/' setTopPanel={setTopPanel}  setNumber={setNumber} setNumClick={setNumClick} numClick={numClick} type={'operation'}/>
        <Button nameBtn='*' setTopPanel={setTopPanel}  setNumber={setNumber} setNumClick={setNumClick} numClick={numClick} type={'operation'}/>
        <Button nameBtn='-' setTopPanel={setTopPanel}  setNumber={setNumber} setNumClick={setNumClick} numClick={numClick} type={'operation'}/>
        <Button nameBtn='+' setTopPanel={setTopPanel}  setNumber={setNumber} setNumClick={setNumClick} numClick={numClick} type={'operation'}/>
      </div>
    </div>
  );
}

export default App;
