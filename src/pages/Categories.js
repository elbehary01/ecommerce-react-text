import React, { useState, useEffect } from 'react';
import CategoriesList from '.././components/categories/Categories-List';
import CategoryItem from '.././components/category/Category-Item';
import axios from 'axios';
const data = [
  {
    id: 1,
    name: 'Clothes',
    image: 'https://api.lorem.space/image/fashion?w=640&h=480&r=6011',
  },
  {
    id: 2,
    name: 'Electronics',
    image: 'https://api.lorem.space/image/watch?w=640&h=480&r=304',
  },
  {
    id: 3,
    name: 'Furniture',
    image:
      'https://api.lorem.space/image/furniture?w=640&h=480&r=9450',
  },
  {
    id: 4,
    name: 'Shoes',
    image: 'https://api.lorem.space/image/shoes?w=640&h=480&r=3133',
  },
  {
    id: 5,
    name: 'Others',
    image: 'https://api.lorem.space/image?w=640&h=480&r=4432',
  },
];
const Categories = () => {
  const [categoriesResp, setCategoriesResp] = useState([]);
  const [errorResp, setErrorResp] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`https://api.escuelajs.co/XOXOX/v1/categories`)
      .then(response => setCategoriesResp(response))
      .catch(error => setErrorResp(error, 'error'))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <h2>request is still in process, loading..</h2>;
  }
  if (errorResp) {
    console.log('error: ', errorResp);
    return <h2>an error has occurred, please contact the support</h2>;
  }

  return (
    <div>
      <CategoriesList data={categoriesResp.data} />
      {/* <CategoryItem /> */}
    </div>
  );
};

export default Categories;
