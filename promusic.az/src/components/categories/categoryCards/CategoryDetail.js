import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getSubCategories } from "../../../redux/actions/categoryActions";
function CategoryDetail() {
  const { id: categoryId } = useParams();
  const { items } = useSelector((state) => state.subCategoryListReducer);
  const dispatch = useDispatch();

  React.useEffect(() => {
    getSubCategories()(dispatch);
  }, [dispatch]);

  const filterSubCategories = () => {
    return items?.filter((item) => item.categoryId === Number(categoryId));
  };
  const subCategories = filterSubCategories();

  return (
    <>
      {items ? (
        <ul className="cat-list">
          {subCategories.length ? (
            subCategories.map((item) => (
              <li key={item.id} className="cat-list-item">
                <a href="/product-list?categories=5">{item.name}</a>
              </li>
            ))
          ) : (
            <h1>Empty</h1>
          )}
        </ul>
      ) : (
        <h1>Loading...</h1>
      )}
    </>
  );
}

export default CategoryDetail;
