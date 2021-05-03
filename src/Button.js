import React from 'react';

const Button = ({nameBtn, setTopPanel, setBottomPanel, setNumClick, setNumber, numClick, number}) => {
    const handleClick = (e) => {
    const target = e.target.innerHTML;

    setTopPanel(prev => prev + target)

        if(target === '0' || target === '1' || target === '2' || target === '3' || target === '4' || target === '5' || target === '6' || target === '7' || target === '8' || target === '9' || target === '.'){
            setNumClick(prev => prev + target);
        }else if(target === '/' || target === '*' || target === '-' || target === '+'){
            setNumber(prev => [...prev, numClick])
            setNumber(prev => [...prev, target])
            setNumClick('')
        }else if(target === '='){
            let num = [...number, numClick]
            
            let multiDeviIndex = [...setIndexOperator(num, '*'), ...setIndexOperator(num, '/')]
            multiDeviIndex.sort((a,b) => a.index - b.index)
            
            if(multiDeviIndex.length > 0){
                let j = 0;
                multiDeviIndex.forEach(index => {
                    if(index.operator === '*'){
                        num[index.index +  1 - j] = multiply(num[index.index - 1 - j], num[index.index + 1 - j])
                        num.splice(index.index - 1 - j, 2)
                        j += 2
                    }else{
                        num[index.index +  1 - j] = division(num[index.index - 1 - j], num[index.index + 1 - j])
                        num.splice(index.index - 1 - j, 2)
                        j += 2
                    }
                })
            }

            let plusMinusIndex = [...setIndexOperator(num, '+'), ...setIndexOperator(num, '-')]
            plusMinusIndex.sort((a,b) => a.index - b.index)
            
            if(plusMinusIndex.length > 0){
                let j = 0;
                plusMinusIndex.forEach(index => {
                    if(index.operator === '+'){
                        num[index.index +  1 - j] = plus(num[index.index - 1 - j], num[index.index + 1 - j])
                        num.splice(index.index - 1 - j, 2)
                        j += 2
                    }else{
                        if(num[index.index - 1] === ''){
                            num[index.index - 1] = 0
                        }
                        num[index.index +  1 - j] = minus(num[index.index - 1 - j], num[index.index + 1 - j])
                        num.splice(index.index - 1 - j, 2)
                        j += 2
                    }
                })
            }
            setBottomPanel(num)
        }
        else if(target === 'clear'){
            setNumber([])
            setNumClick('')
            setTopPanel('')
            setBottomPanel('')
        }
    }

    const setIndexOperator = (num, operator) => {
        let indexes = [], i = -1
        while((i = num.indexOf(operator, i+1)) !== -1){
            indexes.push({index: i, operator:operator})
        }
    return indexes
    }

    const multiply = (x, y) => {
        return (x*10 * y*10)/100
    }

    const division = (x, y) => {
        return x / y
    }
    const plus = (x, y) => {
        return parseFloat(x) + parseFloat(y)
    }

    const minus = (x, y) => {
        return parseFloat(x) - parseFloat(y)
    }

    return (
        <button onClick={handleClick}>{nameBtn}</button>
    );
    
} 

export default React.memo(Button);

