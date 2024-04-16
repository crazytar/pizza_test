import React from "react";

const CategoriesArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Categories({ categoryId, categoryIdSet }) {
    //const [selectedCat, selectedCatSet] = React.useState(0);
    const OnClickCat = (index) => {
        if (categoryId !== index)
            categoryIdSet(index);

    }
    return (
        <div className="categories">

            <ul>
                {CategoriesArr.map((item, index) => {
                    return <li key={index} className={categoryId === index ? 'active' : ''} onClick={() => OnClickCat(index)
                    }> {item}</li>
                })}


            </ul>
        </div >
    )
}
export default Categories;