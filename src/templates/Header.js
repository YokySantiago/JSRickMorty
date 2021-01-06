const Header = () => {
  const view = `
    <div class="w-full flex flex-row justify-between items-center py-2 px-4">
        <div class="Header-Logo">
            <h1 class="text-3xl font-bold text-gray-100">
                <a href="/">
                    100tifi.co
                </a>
            </h1>
        </div>
        <div class="Header-nav text-gray-100">
            <a href="#/about">
                Abouts
            </a>
        </div>
    </div>
  `;
  return view;
};

export default Header;
