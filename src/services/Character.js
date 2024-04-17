import { storage } from '../firebase/config';
import { getDownloadURL, ref } from 'firebase/storage';

const BASE_URL = "https://swapi.dev/api";

export function getCharacters({ search = null, page = null, category = 'people', signal = null }) {
  let path = `${BASE_URL}/${category}`;
  path += `?${search ? `search=${search}&` : ''}${page ? `page=${page}` : ''}`;
  return fetch(path, { signal }).then(data => data.json());
}

export function getImageCharacter({ path = '' }) {
  return getDownloadURL(ref(storage, `/${path}`));
}

