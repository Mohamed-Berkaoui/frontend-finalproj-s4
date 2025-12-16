import React from 'react'
import { useSelector } from 'react-redux';

function Products_Search({ updateSearch }) {
    function handleSubmit(e){
        e.preventDefault();
        const title=e.target.title.value;
        const category=e.target.category.value;
        const price=e.target.price.value;
        const newSearch={
            title,
            category,
            price
        }
        updateSearch(newSearch);
        // e.target.reset();
    }
    const categories=useSelector((state)=>state.category);
  return (
        <form onSubmit={handleSubmit} className="search-filters">
            <div className="filter-group">
                <label htmlFor="title">Title</label>
                <input
                    type="text"
                    id="title"
                    name='title'
                    placeholder="Search by title"
                />
            </div>
            
            <div className="filter-group">
                <label htmlFor="category" >Category</label>
                <select id="category" name="category">
                    <option value="all">All Categories</option>
                    {categories.data?.map((cat)=>(
                        <option key={cat._id} value={cat._id}>{cat.name}</option>
                    ))}
                </select>
            </div>
            
            <div className="filter-group">
                <label htmlFor="price">Price</label>
                <input
                    type="number"
                    id="price"
                    placeholder="Max price"
                    name='price'
                />
            </div>
            
            <button>Search</button>
        </form>
  )
}

export default Products_Search