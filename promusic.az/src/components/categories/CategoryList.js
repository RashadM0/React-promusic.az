import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { Col } from "reactstrap";
import { bindActionCreators } from "redux";
import * as categoryActions from "../../redux/actions/categoryActions";
import { getCategories } from "../../redux/actions/categoryActions";
import "./CategoryList.scss";

function CategoryList() {
  const { items } = useSelector((state) => state.categoryListReducer);
  const dispatch = useDispatch();
  React.useEffect(() => {
    getCategories()(dispatch);
  }, [dispatch]);

  return (
    <>
      <Col className="categories d-flex" xs="12" lg="9">
        <ul className="d-flex">
          {items?.map((item) => (
            <li>
              <a key={item.id}>{item.name}</a>
            </li>
          ))}
        </ul>
      </Col>
    </>
  );
}

function mapStateToProps(state) {
  return {
    categories: state.CategoryListReducer,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getCategories: bindActionCreators(
        categoryActions.getCategories,
        dispatch
      ),
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CategoryList);