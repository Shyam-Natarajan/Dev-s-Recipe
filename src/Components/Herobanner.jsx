import React, { useContext, useState } from 'react';
import { RecipeResultContext } from '../Context/RecipeContext';
import { useNavigate } from 'react-router-dom';

const Herobanner = () => {
    const [isLargeBannerLoaded, setLargeBannerLoaded] = useState(false);
    const [isMediumBannerLoaded, setMediumBannerLoaded] = useState(false);
    const [isSmallBannerLoaded, setSmallBannerLoaded] = useState(false);
    const [seachData, setSearchData]= useState("");
    const {setSearchQuery} = useContext(RecipeResultContext);
    const navigate = useNavigate();

    const handleSearch = (seachData) => {
        setSearchQuery(seachData);
        navigate(`/recipe`);
        setSearchData("");
    }
   
    return (
        <>
            {/* Large banner */}
            <div className="skeleton absolute inset-0" style={{ display: isLargeBannerLoaded ? 'none' : 'block' }} />
            <div
                className={`hero h-96 max-w-screen hidden object-cover lg:grid transition-opacity duration-500 ${
                    isLargeBannerLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    backgroundImage: "url(../hero-banner-large.jpg)",
                }}>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-5xl font-bold">Your Desired Dish?</h1>
                        <form onSubmit={(e)=>{e.preventDefault(); handleSearch(seachData)}}>
                        <p className="mb-1">
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow placeholder-orange-600 text-orange-600"
                                    placeholder="Search Recipe..."
                                    value={seachData}
                                    onChange={(e)=>setSearchData(e.target.value)}
                                />
                                <button type='submit'  className="h-8 w-8 ">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="#fa320f"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                </button>
                            </label>     
                        </p>
                        </form>
                        <small>Search any recipe e.g: burger, pizza, sandwich, toast</small>
                    </div>
                </div>
            </div>
            <img
                src="../hero-banner-large.jpg"
                alt="Large Banner"
                className="hidden"
                onLoad={() => setLargeBannerLoaded(true)}
            />

            {/* Medium banner */}
            <div className="skeleton absolute inset-0" style={{ display: isMediumBannerLoaded ? 'none' : 'block' }} />
            <div
                className={`hero h-96 max-w-screen mx-auto hidden md:grid lg:hidden object-cover transition-opacity duration-500 ${
                    isMediumBannerLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    backgroundImage: "url(../hero-banner-medium.jpg)",
                }}>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-md">
                        <h1 className="mb-5 text-4xl font-bold">Your Desired Dish?</h1>
                        <form onSubmit={(e)=>{e.preventDefault(); handleSearch(seachData)}}>
                        <p className="mb-1">
                            <label className="input input-bordered flex items-center gap-2">
                                <input
                                    type="text"
                                    className="grow placeholder-orange-600 text-orange-600"
                                    placeholder="Search Recipe..."
                                    value={seachData}
                                    onChange={(e)=>setSearchData(e.target.value)}
                                />
                                <button type="submit" className="h-8 w-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="#fa320f"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                                </button>
                            </label>     
                        </p>
                        </form>
                        <small>Search any recipe e.g: burger, pizza, sandwich, toast</small>
                    </div>
                </div>
            </div>
            <img
                src="../hero-banner-medium.jpg"
                alt="Medium Banner"
                className="hidden"
                onLoad={() => setMediumBannerLoaded(true)}
            />

            {/* Small banner */}
            <div className="skeleton absolute inset-0" style={{ display: isSmallBannerLoaded ? 'none' : 'block' }} />
            <div
                className={`hero h-96 max-w-screen md:hidden object-fill transition-opacity duration-500 ${
                    isSmallBannerLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{
                    backgroundImage: "url(../hero-banner-small.jpg)",
                }}>
                <div className="hero-content text-neutral-content text-center p-0.5">
                    <div className="max-w-sm">
                        <h1 className="mb-5 text-3xl sm:text-4xl font-bold">Your Desired Dish?</h1>
                        <form onSubmit={(e)=>{e.preventDefault(); handleSearch(seachData)}}>
                        <p className="mb-1">
                            <label className="input input-bordered flex items-center gap-1">
                                <input
                                    type="text"
                                    className="grow placeholder-orange-600 text-orange-600"
                                    placeholder="Search Recipe..."
                                    value={seachData}
                                    onChange={(e)=>setSearchData(e.target.value)}
                                />
                                <button type="submit" className="h-8 w-8">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 16 16"
                                    fill="#fa320f"
                                    >
                                    <path
                                        fillRule="evenodd"
                                        d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                                        clipRule="evenodd"
                                    />                                    
                                </svg>
                                </button>
                            </label>     
                        </p>
                        </form>
                        <small>Search any recipe e.g: burger, pizza, sandwich, toast</small>
                    </div>
                </div>
            </div>
            <img
                src="../hero-banner-small.jpg"
                alt="Small Banner"
                className="hidden"
                onLoad={() => setSmallBannerLoaded(true)}
            />
        </>
    );
};

export default Herobanner;
