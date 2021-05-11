
const defaultEndpoint = `https://rickandmortyapi.com/api/character/`;


const getDataFromApi = () => {
  return fetch(defaultEndpoint)
    .then((response) => {
      if (!response.ok) {
        throw response;
      }
      return response.json();
    })
    .then((data) => {
      return data.results;
    })
    .catch(() => {});
};

export { getDataFromApi };
