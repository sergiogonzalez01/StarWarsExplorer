import { storage } from '../firebase/config';
import { getDownloadURL, ref } from 'firebase/storage';

const BASE_URL = "https://swapi.dev/api";

export async function getCharacters({ search = null, page = null, category = 'people', signal = null }) {
  try {
    let path = `${BASE_URL}/${category}`;
    path += `?${search ? `search=${search}&` : ''}${page ? `page=${page}` : ''}`;
    const res = await fetch(path, { signal });
    return await res.json();
  } catch (err) {
    return { results: [] }
  }
}

export function getImageCharacter({ path = '' }) {
  return getDownloadURL(ref(storage, `/${path}`));
}

