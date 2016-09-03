import React, { PropTypes } from 'react';
import Card from './Card.jsx';

const styles = {
  display: 'inline-block',
  transform: 'rotae(-3deg)',
  WebkitTransform: 'rotate(-3deg)'
};

const propTypes = {
  card: PropTypes.object
};

const CardDragPreview = (props) => {
  styles.width = `${props.card.clientWidth || 243}px`;
  styles.height = `${props.card.clientHeight || 243}px`;
  return (
    <div style={styles}>
      <Card item={props.card.item} project={props.project} />
    </div>
  );
};

CardDragPreview.propTypes = propTypes;

export default CardDragPreview;
