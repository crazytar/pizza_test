import React from "react";

const CategoriesArr = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];

function Categories() {
    const [selectedCat, selectedCatSet] = React.useState(0);

    return (
        <div className="categories">

            <ul>
                {CategoriesArr.map((item, index) => {
                    return <li key={index} className={selectedCat === index ? 'active' : ''} onClick={() => selectedCatSet(index)
                    }> {item}</li>
                })}


            </ul>
        </div >
    )
}
export default Categories;