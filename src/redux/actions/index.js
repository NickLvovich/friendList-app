import axios from 'axios';
import {ADD_NOTE, DELETE_NOTE, NOTE_LIST} from '../types';
import {NOTE_SERVER} from '../config';

export function fetchNotes() {
  const request = axios
    .get('https://whispering-forest-65400.herokuapp.com/api/notes/list')
    .then((response) => response.data)
    .catch((err) => console.log('err', err));

  return {
    type: NOTE_LIST,
    payload: request,
  };
}

export function addNewNote(note) {
  return {
    type: ADD_NOTE,
    id: noteID++,
    note,
  };
}

export function submitNote(dataToSubmit) {
  const request = axios
    .post(
      `https://whispering-forest-65400.herokuapp.com/api/notes/add_note`,
      dataToSubmit,
    )
    .then((response) => response.data);

  return {
    type: ADD_NOTE,
    payload: request,
  };
}
export function deleteNote(dataToSubmit) {
  const request = axios
    .post(
      `https://whispering-forest-65400.herokuapp.com/api/notes/delete`,
      dataToSubmit,
    )
    .then((response) => response.data)
    .catch((err) => console.log('err', err));

  return {
    type: DELETE_NOTE,
    payload: request,
  };
}
export function updateNote(dataToSubmit) {
  console.log('dataToSubmit', dataToSubmit)
  const request = axios
    .post(
      `https://whispering-forest-65400.herokuapp.com/api/notes/update`,
      dataToSubmit,
    )
    .then((response) => response.data)
    .catch((err) => console.log('err', err));

  return {
    type: DELETE_NOTE,
    payload: request,
  };
}
