import config from '../config/index';

const URL_VIDEOS = `${config.BACKEND_URL}/videos`;

function create(video) {
  return fetch(`${URL_VIDEOS}/`, {
    method: 'POST',
    headers: {
      'Content-type': 'application/json',
    },
    body: JSON.stringify(video),
  })
    .then(async (response) => {
      if (response.ok) {
        const parsed = await response.json();
        return parsed;
      }

      throw new Error('Failed to create video');
    });
}

export default {
  create,
};
