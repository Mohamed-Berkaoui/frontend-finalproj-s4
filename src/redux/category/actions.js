function fetchCategoriesSuccess(data) {
    return { type: "FETCH_CATEGORIES_SUCCESS" , payload: data };
}

function fetchCategoriesError(error) {
    return { type: "FETCH_CATEGORIES_ERROR", payload: error };
}   
export function fetchCategories() {
    return async (dispatch) => {
        try {
            const response = await fetch("http://localhost:3000/api/v1/category/");
            const data = await response.json();
            dispatch(fetchCategoriesSuccess(data.data));
        } catch (error) {
            dispatch(fetchCategoriesError(error.message));
        }
    };
}