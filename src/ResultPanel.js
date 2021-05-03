const ResultPanel = ({topPanel, bottomPanel}) => {
    return ( 
        <div className='panel'>
            <p>{topPanel}</p>
            <p className='result'>{bottomPanel}</p>
        </div>
     );
}
 
export default ResultPanel;