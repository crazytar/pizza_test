import { useRef, useState, useEffect } from "react";
import { FaSort } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";

import { setSortType, setSortOrder } from "../../redux/filterSlice";

function Sort() {
    const sort = useSelector((store) => store.filterReducer.sort);
    const dispatch = useDispatch();// we can get it also as store.dispatch importing here our store.js
    const [open, setOpen] = useState(false);
    const sortRef = useRef();
    // const [selected, setSelected] = useState(0);

    const sortList = ['популярности', 'цене', 'алфавиту'];

    const onClickSortList = (index) => {
        // setSelected(index);
        setOpen(false);
        dispatch(setSortType(index));
    }
    useEffect(() => { //close popup when click outside sort block, ComponentDidMount function, first render comp
        const handleClickOutside = (event) => {
            // console.log('event.composedPath ', event.composedPath());
            // console.log('sortRef ', sortRef);
            if (!event.composedPath().includes(sortRef.current)) { //if click outside sort block
                setOpen(false);
            }
        }

        document.body.addEventListener('click', handleClickOutside);

        return () => {//ComponentWillUnmontfunction, destroy component
            document.body.removeEventListener('click', handleClickOutside);
        }

    }, []);

    return (
        <div ref={sortRef} className="sort">
            <div className="sort__label">
                {/* <FaSort onClick={() => setSortOrder(prev => !prev)} /> */}
                <div className="sort__order">
                    <FaSort onClick={() => dispatch(setSortOrder(!sort.sortOrder))} />
                </div>
                <b>Сортировка по:</b>
                <span onClick={() => setOpen(prev => !prev)}>{sortList[sort.sortType]}</span>
            </div>
            {open && (
                <div className="sort__popup">
                    <ul>
                        {sortList.map((item, index) => {
                            return <li key={index} className={sort.sortType === index ? 'active' : ''} onClick={() => onClickSortList(index)
                            }> {item}</li>
                        })}
                    </ul>
                </div>
            )
            }
        </div >

    )
}
export default Sort;