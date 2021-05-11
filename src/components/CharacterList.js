import PropTypes from 'prop-types';
import Filters from './Filters/Filters';
import CharacterCard from './CharacterCard';
import NotFound from './Extras/NotFound';
import '../stylesheets/components/CharacterList.scss';

function CharacterList(props) {
  const getCharacterList = props.data.map((character) => {
    const { id, image, name, status, species } = character;
    return (
      <li className="CharacterList__list--items" key={id}>
        <CharacterCard
          id={id}
          image={image}
          name={name}
          species={species}
          status={status}
        />
      </li>
    );
  });

  return (
    <main className="CharacterList">
      <section className="CharacterList__section">
        <Filters
          handleFilters={props.handleFilters}
          handleReset={props.handleReset}
          filterName={props.filterName}
          filterGender={props.filterGender}
          filterStatus={props.filterStatus}
          isSortedByName={props.isSortedByName}
        />
        {!getCharacterList.length && !props.isLoading ? (
          <NotFound />
        ) : (
          <ul className="CharacterList__list">{getCharacterList}</ul>
        )}
      </section>
    </main>
  );
}

CharacterList.propTypes = {
  data: PropTypes.array.isRequired,
  handleFilters: PropTypes.func.isRequired,
  handleReset: PropTypes.func.isRequired,
  filterName: PropTypes.string.isRequired,
  filterGender: PropTypes.string.isRequired,
  filterStatus: PropTypes.string.isRequired,
  isLoading: PropTypes.bool.isRequired,
  isSortedByName: PropTypes.bool.isRequired,
};

export default CharacterList;
