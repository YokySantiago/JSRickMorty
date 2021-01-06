import getHash from "../utils/getHash";
import getData from "../utils/getData";

const Character = async () => {
  const id = getHash();
  const character = await getData(id);
  const classAlive = "text-green-600";
  const classDeath = "text-red-600";
  const statusClass =
    character.status.toUpperCase() === "ALIVE" ? classAlive : classDeath;

  const view = `
    <div class="container mx-auto my-4">
        <div class="w-10/12 flex flex-row gap-2 mx-auto shadow rounded bg-gray-800 bg-opacity-50">
          <article class="flex flex-col w-4/12">
            <img src="${character.image}" alt="${character.name}"
                class=""/>
          </article>
          <article class="p-4 w-8/12">
              <h2 class="text-4xl py-2 px-4 font-normal text-gray-200 text-center">${character.name}</h2>
              <h3 class="text-base font-semibold text-gray-200">Episodes: <span class="text-gray-500 font-thin">${character.episode.length}</span></h3>
              <h3 class="text-base font-semibold text-gray-200">Status: 
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                  class="h-5 w-5 ${statusClass} mr-2 inline">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
              </svg>
              <span class="text-gray-500 font-thin">${character.status}</span></h3>
              <h3 class="text-base font-semibold text-gray-200">Species: <span class="text-gray-500 font-thin">${character.species}</span></h3>
              <h3 class="text-base font-semibold text-gray-200">Gender: <span class="text-gray-500 font-thin">${character.gender}</span></h3>
              <h3 class="text-base font-semibold text-gray-200">Origin: <span class="text-gray-500 font-thin">${character.origin.name}</span></h3>
              <h3 class="text-base font-semibold text-gray-200">Last location: <span class="text-gray-500 font-thin">${character.location.name}</span></h3>
          </article>
        </div>
    </div>
  `;
  return view;
};

export default Character;
