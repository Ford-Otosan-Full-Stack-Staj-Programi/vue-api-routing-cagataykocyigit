import { baseRequest } from "@/service/baseRequest";

export const getCharacters = async () => {
    const characters = await baseRequest('/character').then(response => response.data);
    return characters;
}


export const getCharacterDetail = async (id) => {
    const detail = await baseRequest(`/character/${id}`).then(response => response.data);
    return detail;
  }