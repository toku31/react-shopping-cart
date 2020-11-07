import React, { Component } from 'react';
import { filterProducts, sortProducts } from '../actions/productActions';
import { connect } from 'react-redux';

// Redux作成により修正
// export default class Filter extends Component {
class Filter extends Component {
  render() {
    return !this.props.filteredProducts ? (
      <div>Loading...</div>
    ) : (
      <div className='filter'>
        <div className='filter-result'>
          {this.props.filteredProducts.length} Products
        </div>
        <div className='filter-sort'>
          Order{' '}
          {/* <select value={this.props.sort} onChange={this.props.sortProducts}> */}
          <select
            value={this.props.sort}
            onChange={(e) =>
              this.props.sortProducts(
                this.props.filteredProducts,
                e.target.value
              )
            }
          >
            <option value='latest'>Latest</option>
            <option value='lowest'>Lowest</option>
            <option value='highest'>Highest</option>
          </select>
        </div>
        <div className='filter-size'>
          Filter{' '}
          {/* <select value={this.props.size} onChange={this.props.filterProducts}> */}
          <select
            value={this.props.size}
            onChange={(e) =>
              this.props.filterProducts(this.props.products, e.target.value)
            }
          >
            <option value=''>ALL</option>
            <option value='XS'>XS</option>
            <option value='S'>S</option>
            <option value='M'>M</option>
            <option value='L'>L</option>
            <option value='XL'>XL</option>
            <option value='XXL'>XXL</option>
          </select>
        </div>
      </div>
    );
  }
}
// Redux作成により以下追記
export default connect(
  (state) => ({
    // connect props: state <=>props
    size: state.products.size,
    sort: state.products.sort,
    products: state.products.items,
    filteredProducts: state.products.filteredItems,
  }),
  {
    filterProducts, // mapping actions
    sortProducts,
  }
)(Filter); //component name
