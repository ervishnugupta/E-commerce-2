import styled from 'styled-components'
import { BsList, BsFillGridFill } from "react-icons/bs";
import { useFilterContext } from '../Context/Filter_Context';

const Sort = () => {
  const {filter_products, grid_view, setGridView, setListView, sorting} = useFilterContext();
// console.log(filter_products);

  return (
    <Wrapper className='sort-section'>
      {/* 1 -column */}
      <div className="sorting-list--grid">
        <button className={grid_view ? 'active sort-btn': 'sort-btn'} onClick={setGridView}>
          <BsFillGridFill className='icon'/>
        </button>
        <button className={grid_view ? 'sort-btn': 'active sort-btn'} onClick={setListView}>
          <BsList className='icon'/>
        </button>
      </div>
      {/* 2 -column */}
      <div className="product-data">
        <p>{`${filter_products.length} Products Available`}</p>
      </div>
      {/* 3 -column */}
      <div className="sort-selection">
        <form action="#">
          <label htmlFor="sort"></label>
          <select name="sort" id="sort" className='sort-selection--style' onClick={sorting}>
            <option value="#" disabled selected>Filter Price</option>
            <option value="#"></option>
            <option value="lowest">Price(Lowest)</option>
            <option value="#" disabled></option>
            <option value="highest">Price(Highest)</option>
            <option value="#" disabled></option>
            <option value="a-z">Price(a-z)</option>
            <option value="#" disabled></option>
            <option value="z-a">Price(z-a)</option>
          </select>
        </form>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  margin-top: 5rem;

  .sorting-list--grid {
    display: flex;
    gap: 2rem;

    .sort-btn {
      padding: 0.8rem 1rem;
      border: none;
      display: flex;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .icon {
      font-size: 1.6rem;
    }
    .active {
      background-color: ${({ theme }) => theme.colors.black};
      color: #fff;
    }
  }

  .sort-selection .sort-selection--style {
    padding: 0.5rem;
    cursor: pointer;

    .sort-select--option {
      padding: 0.5rem 0;
      cursor: pointer;
      height: 2rem;
      padding: 10px;
    }
  }
`;

export default Sort
