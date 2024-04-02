import React from "react";

const CategoriesArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Categories({ categotyId, categotyIdSet }) {
    //const [selectedCat, selectedCatSet] = React.useState(0);
    const OnClickCat = (index) => {
        if (categotyId !== index)
            categotyIdSet(index);

    }
    return (
        <div className="categories">

            <ul>
                {CategoriesArr.map((item, index) => {
                    return <li key={index} className={categotyId === index ? 'active' : ''} onClick={() => OnClickCat(index)
                    }> {item}</li>
                })}


            </ul>
        </div >
    )
}
export default Categories;