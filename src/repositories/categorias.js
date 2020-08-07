import config from '../config/index';

const URL_CATEGORIES = `${config.BACKEND_URL}/categorias`;

function getAll() {
  return fetch(`${URL_CATEGORIES}`)
    .then(async (response) => {
      if (response.ok) {
        const parsed = await response.json();
        return parsed;
      }

      throw new Error('Failed to fetch getAllVideos()');
    });
}

function getAllWithVideos() {
  return fetch(`${URL_CATEGORIES}/?_embed=videos`)
    .then(async (response) => {
      if (response.ok) {
        const parsed = await response.json();
        return parsed;
      }

      throw new Error('Failed to fetch getAllVideos()');
    });
}

export default {
  getAll,
  getAllWithVideos,
};
