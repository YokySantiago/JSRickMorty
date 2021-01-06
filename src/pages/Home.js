import getData from "../utils/getData";

const Home = async () => {
  const characters = await getData();
  const view = `
        <div class="grid grid-cols-1 mx-4 mb-2 sm:grid-cols-3 md:grid-cols-4 sm:gap-8">
            ${characters.results
              .map((character) => {
                const classAlive = "text-green-600";
                const classDeath = "text-red-600";
                const statusClass =
                  character.status.toUpperCase() === "ALIVE"
                    ? classAlive
                    : classDeath;
                return `
                      <a href="#/${character.id}/">
                          <article class="flex flex-col mb-2 shadow-2xl rounded bg-gray-800 bg-opacity-50">
                              <img src="${character.image}" alt="${character.name}"
                                  class="rounded-t"/>
                              <h2 class="text-xl py-2 px-4 font-light text-gray-200 text-center flex flex-row items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"
                                    class="h-5 w-5 ${statusClass} mr-2">
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                                </svg>
                                ${character.name}
                              </h2>
                          </article>
                      </a>
                  `;
              })
              .join("")}
        </div>
    `;

  return view;
};

export default Home;
