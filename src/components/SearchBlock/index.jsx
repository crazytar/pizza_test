import { useContext, useRef, useCallback, useState } from 'react';
import styles from './SearchBlock.module.scss' //scss modules approach
// import AppContext from '../../context'
import debounce from 'lodash.debounce'
import { CiSearch } from "react-icons/ci";
import { CiSquareRemove as RemoveBtn } from "react-icons/ci";
import { AppContext } from '../../App';

const SearchBlock = () => {

    const { searchValueUpdate } = useContext(AppContext);
    const inputRef = useRef();
    const [currValue, setCurrValue] = useState('');

    const debounceUpdate = useCallback( //create and return func only on first render like useEffect
        debounce(
            (value) => {
                searchValueUpdate(value)
            },
            500 //timeout
        ),
        []//dependecnies
    )

    const onClickRemove = () => {
        setCurrValue('');
        debounceUpdate('');
        //document.querySelector('input').focus(); //use useRef instead
        inputRef.current.focus(); //save focus on input after clear

    }
    const onChangeInput = (event) => {
        setCurrValue(event.target.value);
        debounceUpdate(event.target.value);
    }
    return (

        <div className={styles.search_block} >

            {!currValue && <CiSearch className={styles.searh_icon} />}
            <input ref={inputRef} onChange={(event) => { onChangeInput(event) }} value={currValue} type="text" placeholder="               Найти пиццу..." />
            {currValue &&
                <RemoveBtn className={styles.btn_remove_icon} onClick={onClickRemove} />
            }

        </div>
    );
}

export default SearchBlock;
