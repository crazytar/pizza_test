import styles from './SearchBlock.module.scss' //scss modules approach
// import AppContext from '../../context'
import { CiSearch } from "react-icons/ci";
import { CiSquareRemove as RemoveBtn } from "react-icons/ci";

const SearchBlock = ({ searchValue, searchValueUpdate }) => {

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