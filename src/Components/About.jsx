import React from 'react'


const About = () => {
    

    return (
        <div className='bg-base-200 p-10'>
            <div className='max-w-screen-lg mx-auto'>
                {}
                <div className="card md:card-side bg-base-100 shadow-xl">
                <figure>
                    <div className='skeleton absolute inset-0'/>
                        <img
                            src="/1.jpg"
                            alt="image" 
                            className='object-fill w-full h-full opacity-0 transition-opacity duration-500'
                            onLoad={(e)=>{
                                e.currentTarget.style.opacity = 1;
                                e.currentTarget.previousElementSibling.style.display = "none";
                            }}/>
                    </figure>
                    <div className="card-body">
                        <h2 className="card-title">Explore a World of Flavors</h2>
                        <p>Welcome to our Recipe Search App, your gateway to discovering delicious dishes from around the globe. Whether you’re a seasoned chef or a curious beginner, this app is designed to simplify your culinary journey. With an intuitive search feature, you can explore recipes by cuisine, ingredients, or dietary preferences, making it easier than ever to find the perfect dish for any occasion.</p>
                    </div>
                    
                </div>

                <div className="card md:card-side bg-base-100 shadow-xl mt-10">
                    
                    <div className="card-body">
                        <h2 className="card-title">Personalized Recommendations</h2>
                        <p>Our app goes beyond just providing recipes; it tailors recommendations to your tastes and needs. Looking for gluten-free or vegan options? Need inspiration for dinner? The Recipe Search App allows you to filter results and explore healthy options that suit your lifestyle. With each recipe, you’ll find detailed cooking instructions, serving sizes, and even health labels to guide your choices.</p>
                    </div>
                    <figure>
                    <div className='skeleton absolute inset-0'/>
                        <img
                            src="/2.jpg"
                            alt="image" 
                            className='object-fill w-full h-full opacity-0 transition-opacity duration-500'
                            onLoad={(e)=>{
                                e.currentTarget.style.opacity = 1;
                                e.currentTarget.previousElementSibling.style.display = "none";
                            }}/>
                    </figure>
                </div>

                <div className="card md:card-side bg-base-100 shadow-xl mt-10">
                <figure>
                    <div className='skeleton absolute inset-0'/>
                        <img
                            src="/3.jpg"
                            alt="image" 
                            className='object-fill w-full h-full opacity-0 transition-opacity duration-500'
                            onLoad={(e)=>{
                                e.currentTarget.style.opacity = 1;
                                e.currentTarget.previousElementSibling.style.display = "none";
                            }}/>
                    </figure>
                <div className="card-body">
                        <h2 className="card-title">Your Culinary Companion</h2>
                        <p>Empowering you to create and enjoy incredible meals, the Recipe Search App is your culinary companion. Save your favorite recipes, plan meals, and discover new dishes to try every day. Whether you’re cooking for one or a crowd, this app is here to inspire your kitchen adventures and help you turn everyday ingredients into extraordinary meals.</p>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}

export default About;