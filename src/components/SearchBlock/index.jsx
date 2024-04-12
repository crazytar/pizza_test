import { useContext } from 'react';
import styles from './SearchBlock.module.scss' //scss modules approach
// import AppContext from '../../context'
import { CiSearch } from "react-icons/ci";
import { CiSquareRemove as RemoveBtn } from "react-icons/ci";
import { AppContext } from '../../App';

const SearchBlock = () => {

    const { searchValue, searchValueUpdate } = useContext(AppContext);
    return (

        <div className={styles.search_block} >

            {!searchValue && <CiSearch className={styles.searh_icon} />}
            <input onChange={(event) => searchValueUpdate(event.target.value)} value={searchValue} type="text" placeholder="               Найти пиццу..." />
            {searchValue &&
                <RemoveBtn className={styles.btn_remove_icon} onClick={() => searchValueUpdate('')} />
            }

        </div>
    );
}

export default SearchBlock;
