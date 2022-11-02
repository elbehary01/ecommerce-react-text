import React from 'react';
import styles from './styles.module.css';

const CategoriesList = props => {
  return (
    <div className={styles.layout}>
      {props.data.map((element, index) => {
        const { id, name, image } = element;
        return (
          <div key={id || index}>
            <h3>{name}</h3>
            <img src={image} alt={element.name} />
          </div>
        );
      })}
    </div>
  );
};

export default CategoriesList;
