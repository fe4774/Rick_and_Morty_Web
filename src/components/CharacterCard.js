import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import icon from '../images/dead-icon.png';
import unkwnon from '../images/unknown.jpeg';
import { motion } from 'framer-motion';

const gridVariants = {
  exit: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const gridMotionProps = {
  initial: 'initial',
  animate: 'enter',
  exit: 'exit',
  variants: gridVariants
}

const postVariants = {
  initial: {
    opacity: 0,
    y: 20,
    scale: .9
  },
  enter: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: .5
    }
  }
};

const postWhileHover = {
  position: 'relative',
  zIndex: 1,
  background: 'white',
  scale: [1, 1.4, 1.2],
  rotate: [0, 10, -10, 0],
  filter: [
    'hue-rotate(0) contrast(100%)',
    'hue-rotate(360deg) contrast(200%)',
    'hue-rotate(45deg) contrast(300%)',
    'hue-rotate(0) contrast(100%)'],
  transition: {
    duration: .5
  }
}

const postMotionProps = {
  initial: 'initial',
  animate: 'enter',
  variants: postVariants,
  whileHover: postWhileHover
}
function CharacterCard(props) {
  const renderIcon = () => {
    return status === 'Dead' ? (
      <img
        className="CharacterList__list--icon"
        src={icon}
        alt="This character is no longer alive"
      />
    ) : null;
  };

  const { id, image, name, species, status } = props;
  return (
    <motion.li key={id} className="card" {...postMotionProps}>
      
    <Link className="CharacterList__link" to={`/character/${id}`}>
      <article className="CharacterList__article">
        <img
          className="CharacterList__list--img"
          src={image}
          alt={`${name}, Rick and Mortie character`}
        />
        <h3 className="CharacterList__list--name">{name}</h3>
        <ul className="CharacterList__list--features">
          <li className="CharacterList__list--species">Species: {species}</li>
          <li className="CharacterList__list--status">Status:{status}</li>
        </ul>
        {renderIcon()}
      </article>
    </Link>
    </motion.li>
  );
}

CharacterCard.defaultProps = {
  image: { unkwnon },
  name: 'Unknown character',
  species: 'Unknown',
  status: 'Unknown',
};

CharacterCard.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  species: PropTypes.string,
  status: PropTypes.string,
};

export default CharacterCard;
