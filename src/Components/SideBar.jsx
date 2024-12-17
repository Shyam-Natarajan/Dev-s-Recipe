import { FilterIcon } from 'lucide-react';
import React, { useContext, useState } from 'react';
import { RecipeResultContext } from '../Context/RecipeContext';

const SideBar = () => {
  const options = {
    cuisine: [
      "African", "Asian", "American", "British", "Cajun", "Caribbean", "Chinese", "Eastern European", "European", "French", "German", "Greek", "Indian", "Irish", "Italian", "Japanese", "Jewish", "Korean", "Latin American", "Mediterranean", "Mexican", "Middle Eastern", "Nordic", "Southern", "Spanish", "Thai", "Vietnamese"
    ],
    diet: [
      "Gluten Free", "Ketogenic", "Vegetarian", "Lacto-Vegetarian", "Ovo-Vegetarian", "Vegan", "Pescetarian", "Paleo", "Primal", "Low FODMAP"
    ],
    type: [
      "main course", "bread", "marinade", "side dish", "breakfast", "fingerfood", "dessert", "soup", "snack", "appetizer", "beverage", "drink", "salad", "sauce", "lunch", "brunch", "dinner"
    ],
    intolerances: [
      "Dairy", "Egg", "Gluten", "Grain", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"
    ]
  };

  return (
    <>
      <DesktopSideBar options={options} />
      <MobileSideBar options={options} />
    </>
  );
};

export default SideBar;

const DesktopSideBar = ({ options }) => {
  const [searchData, setSearchData] = useState("");
  const { setSelectedFilters, setSearchQuery } = useContext(RecipeResultContext);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    setSelectedItems((prev) => {
      const updatedItems = prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item];
      return updatedItems;
    });
  };

  const handleApply = () => {
    setSearchQuery(searchData)
    setSelectedFilters(selectedItems); // Update global state with selected items
    setSelectedItems([]);
  };

  const handleClear = () => {
    setSelectedItems([]);
  };

  return (
    <div className="p-3 md:p-7 shadow-md min-h-screen w-52 md:w-64 lg:w-72 xl:w-80 2xl:w-96 hidden sm:block relative">
      <div className="flex flex-col gap-20 mb-10">
        <div className="w-full">
          <div className="flex">
            <FilterIcon size={"24px"} color="#F25E3D" />
            <span className="text-xl font-semibold mb-2"> Filters</span>
          </div>
          <form onSubmit={(e) => { e.preventDefault(); handleSearch(searchData) }}>
            <label className="input input-bordered border-2 flex items-center gap-2 mb-5">
              <input type="text" className="grow" placeholder="Search" value={searchData} onChange={(e) => {
                setSearchData(e.target.value);
              }} />
            </label>
          </form>

          {Object.entries(options).map(([key, items]) => (
            <div key={key} className="collapse collapse-arrow mb-2 border-2">
              <input type="checkbox" />
              <div className="collapse-title text-xl font-medium">
                {key.charAt(0).toUpperCase() + key.slice(1)}
              </div>
              <div className="collapse-content bg-base-200">
                <ul className="mt-2">
                  {items.map((item, index) => (
                    <li
                      key={index}
                      className={`
                    border-2 border-base-300 
                    inline-block 
                    rounded-badge 
                    p-2 
                    mt-1 
                    me-1 
                    text-sm 
                    cursor-pointer 
                    ${selectedItems.includes(item)
                          ? "bg-orange-400 text-white"
                          : "bg-base-300 text-base-content"
                        }`}
                      onClick={() => handleSelect(item)}
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-evenly min-w-full absolute bottom-0 left-0 mb-2">
        <button
          type="button"
          className="btn bg-neutral-300 text-black"
          onClick={handleClear}
        >
          Clear
        </button>
        <button
          type="button"
          className="btn bg-orange-600 hover:bg-orange-600 text-white"
          onClick={handleApply}
        >
          Apply
        </button>
      </div>
    </div>
  );
};


const MobileSideBar = ({ options }) => {
  const [searchData, setSearchData] = useState("");
  const { setSelectedFilters, setSearchQuery } = useContext(RecipeResultContext);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleSelect = (item) => {
    setSelectedItems((prev) => {
      const updatedItems = prev.includes(item)
        ? prev.filter((i) => i !== item)
        : [...prev, item];
      return updatedItems;
    });
  };

  const handleApply = () => {
    setSearchQuery(searchData);
    setSelectedFilters(selectedItems); // Update global state with selected items
    setSelectedItems([]);
  };

  const handleClear = () => {
    setSelectedItems([]);
  };


  return (
    <div className="drawer flex w-14 sm:hidden fixed top-64 left-0 z-50">
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <label htmlFor="my-drawer" className="drawer-button">
          <div className="bg-base-300 rounded-e-badge sticky top-10 left-0">
            <div className="m-2 p-1">
              <FilterIcon size={"16px"} className="text-slate-500" />
            </div>
          </div>
        </label>
      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        <div className="menu bg-base-100 text-base-content min-h-full w-64 p-4 relative ">
          <div className="flex flex-col gap-20 sticky top-10 left-0 mb-20">
            <div className="w-10/12">
              <div className="flex">
                <FilterIcon size={"24px"} color="#F25E3D" />
                <span className="text-xl font-semibold mb-2"> Filters</span>
              </div>
              <form onSubmit={(e) => { e.preventDefault(); handleSearch(searchData) }}>
                <label className="input input-bordered border-2 flex items-center gap-2 mb-5">
                  <input type="text" className="grow" placeholder="Search" value={searchData} onChange={(e) => {
                    setSearchData(e.target.value);
                  }} />
                </label>
              </form>

              {Object.entries(options).map(([key, items]) => (
                <div key={key} className="collapse collapse-arrow mb-2 border-2">
                  <input type="checkbox" />
                  <div className="collapse-title text-xl font-medium">
                    {key.charAt(0).toUpperCase() + key.slice(1)}
                  </div>
                  <div className="collapse-content bg-base-200">
                    <ul className="mt-2">
                      {items.map((item, index) => (
                        <li
                          key={index}
                          className={`
                    border-2 border-base-300 
                    inline-block 
                    rounded-badge 
                    p-2 
                    mt-1 
                    me-1 
                    text-sm 
                    cursor-pointer 
                    ${selectedItems.includes(item)
                              ? "bg-orange-400 text-white"
                              : "bg-base-300 text-base-content"
                            }`}
                          onClick={() => handleSelect(item)}
                        >
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="flex justify-evenly min-w-full absolute bottom-0 left-0 mb-12 gap-10">
            <button
              type="button"
              className="btn bg-neutral-300 text-black"
              onClick={handleClear}
            >
              Clear
            </button>
            <button
              type="button"
              className="btn bg-orange-600 hover:bg-orange-600 text-white"
              onClick={handleApply}
            >
              Apply
            </button>
          </div>
        </div>
      </div>
    </div>
  );

}