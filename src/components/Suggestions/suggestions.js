

import React, { useState } from 'react';
import './SuggestionPage.css';

// Define fast food options with taste, dietary preferences, and flavors/toppings
const fastFoodOptions = [
    { name: "Spicy Chicken Sandwich", taste: "spicy", dietary: "non-vegetarian", cheese: "cheddar", sauces: ["ketchup", "mayonnaise"], image: "https://hips.hearstapps.com/hmg-prod/images/delish-200511-seo-club-sandwich-h-14383-eb-1590780714.jpg?crop=0.671xw:1.00xh;0.123xw,0&resize=1200:*" },
    { name: "Veggie Burger", taste: "mild", dietary: "vegetarian", cheese: "mozzarella", sauces: [ "BBQ sauce"], image: "https://trentapizza.co.uk/wp-content/uploads/2016/07/Roasted_Vegetable_Burger_Recipe_with_Hummus-1-1024x683.jpg" },
    { name: "Chicken Cheeseburger", taste: "mild", dietary: "non-vegetarian", cheese: "cheddar", sauces: ["ketchup", "mustard"], image: "https://playswellwithbutter.com/wp-content/uploads/2022/06/Best-Ever-Grilled-Chicken-Burgers-15.jpg" },
    { name: "Grilled Chicken Wrap", taste: "mild", dietary: "non-vegetarian", cheese: "mozzarella", sauces: ["BBQ sauce", "mayonnaise"], image: "https://blog-content.omahasteaks.com/wp-content/uploads/2022/12/blogwp_chicken-wrap-scaled.jpg" },
    { name: "Spicy Chicken Nuggets", taste: "spicy", dietary: "non-vegetarian", cheese: "none", sauces: [ "ketchup","BBQ sauce"], image: "https://mediavine-res.cloudinary.com/image/upload/s--OhG-gDPd--/c_limit,f_auto,fl_lossy,h_1080,q_auto,w_1920/v1602140944/ansc0aoqxvxvg5qsyswi.jpg" },
    { name: "Veg Cheese Nuggets", taste: "mild", dietary: "vegetarian", cheese: "mozzarella", sauces: ["ketchup", "mayonnaise"], image: "https://www.ranioil.com/wp-content/uploads/2022/01/veg-soy.png" },
    { name: "Tandoori Chicken Burger", taste: "spicy", dietary: "non-vegetarian", cheese: "cheddar", sauces: ["tandoori sauce", "mint chutney"], image: "https://media-cdn.tripadvisor.com/media/photo-s/0d/de/2f/16/chicken-tikka-burger.jpg" },
    { name: "Paneer Tikka Burger", taste: "mild", dietary: "vegetarian", cheese: "mozzerellar", sauces: [  "tandoori sauce"], image: "https://i.ytimg.com/vi/fNIZnXmxQUE/maxresdefault.jpg" },
    { name: "Aloo Tikki Burger", taste: "mild", dietary: "vegetarian", cheese: "cheddar", sauces: [ "tandoori sauce", "mayonnaise"], image: "https://c.ndtvimg.com/2022-06/gp4k2jro_burgers_625x300_20_June_22.jpg?im=FaceCrop,algorithm=dnn,width=620,height=350" },
    { name: "Vada Pav Burger", taste: "spicy", dietary: "vegetarian", cheese: "mozzerella", sauces: [ "ketchup", "mayonnaise"], image: "https://www.onegreenplanet.org/wp-content/uploads/2023/07/screen-shot-2023-07-26-at-5-31-58-pm.png" },
    { name: "Peri Peri Fries", taste: "spicy", dietary: "vegetarian", cheese: "cheddar", sauces: ["ketchup", "mayonnaise"], image: "https://as2.ftcdn.net/v2/jpg/02/64/93/61/1000_F_264936111_BQpzeGlPmdfE9SVSNd5K20MjSCn5mxnn.jpg" },
    { name: "French Fries", taste: "mild", dietary: "vegetarian", cheese: "mozzerella", sauces: ["ketchup", "mayonnaise"], image: "https://www.unileverfoodsolutions.com.ph/dam/global-ufs/mcos/SEA/calcmenu/recipes/PH-recipes/appetisers/dirty-fries/dirty-fries-main-header.jpg" },
    { name: "Cheesecake", taste: "sweet", dietary: "vegetarian", cheese: "none", sauces: [ "chocolate"], image: "https://www.tamingtwins.com/wp-content/uploads/2023/06/image-57.jpeg" },
    { name: "Choco Lava Cake", taste: "sweet", dietary: "vegetarian", cheese: "none", sauces: [ "chocolate"], image: "https://www.bakels.in/wp-content/uploads/sites/15/2019/10/unnamed.jpg" },
    { name: "Tiramisu", taste: "sweet", dietary: "vegetarian", cheese: "none", sauces: [ "chocolate"], image: "https://snackrules.com/wp-content/uploads/2014/01/Tiramisu-Cake-Recipe.jpg" },
    { name: "Onion Rings", taste: "mild", dietary: "vegetarian", cheese: "cheddar", sauces: ["ketchup", "mayonnaise"], image: "https://urbanblisslife.com/wp-content/uploads/2023/01/Frozen-Onion-Rings-in-Air-Fryer-FEATURE.jpg" },
    { name: "Garlic Bread",taste: "mild", dietary: "vegetarian", cheese: "mozzarella", sauces: ["ketchup", "mayonnaise"], image: "https://www.yummyfoodrecipes.in/resources/picture/org/Cheesy-Garlic-Bread-Recipe.jpg" },
    { name: "Mozzarella Sticks", taste: "mild", dietary: "vegetarian", cheese: "mozzarella", sauces: ["ketchup", "mayonnaise"], image: "https://airfryingfoodie.com/wp-content/uploads/2021/11/Air-Fryer-Mozzarella-Sticks-copy.jpeg" },
    { name: "Bruschetta", taste: "spicy", dietary: "non-vegetarian", cheese: "cheddar", sauces: ["ketchup", "mayonnaise", "BBQ sauce"], image: "https://www.thespruceeats.com/thmb/IrhoZPJRJ5v0vC3Lb_XFfTjAXTo=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/fresh-tomato-and-basil-bruschetta-2238401_hero_01-a5a087252af045c2813a166ceac39a54.jpg" },
];

function calculateSimilarityScore(userPreferences, option) {
    // Calculate similarity score based on user preferences and option attributes
    let score = 0;
    if (userPreferences.taste === option.taste) score++;
    if (userPreferences.dietary === option.dietary) score++;
    if (userPreferences.cheese === option.cheese) score += 0.5; // Cheese preference weighted less
    const commonSauces = userPreferences.sauces.filter(sauce => option.sauces.includes(sauce));
    score += commonSauces.length;
    return score;
}

function getRecommendations(userPreferences) {
    // Calculate similarity scores for each option
    const similarityScores = fastFoodOptions.map(option => ({
        option,
        score: calculateSimilarityScore(userPreferences, option)
    }));


    // Sort options by similarity score and select top three
    const topThreeOptions = similarityScores
        .sort((a, b) => b.score - a.score)
        .slice(0, 3)
        .map(item => item.option);
    
    return topThreeOptions;
}



const SuggestionPage = () => {
    const [recommendations, setRecommendations] = useState([]);

    const handleRecommendation = () => {
        const tastePreference = document.getElementById("tastePreference").value;
        const dietaryPreference = document.getElementById("dietaryPreference").value;
        const cheeseType = document.getElementById("cheeseType").value;
        const sauces = Array.from(document.querySelectorAll('input[name="sauces"]:checked')).map(checkbox => checkbox.value);

        const userPreferences = { taste: tastePreference, dietary: dietaryPreference, cheese: cheeseType, sauces };
        const generatedRecommendations = getRecommendations(userPreferences);
        setRecommendations(generatedRecommendations);
    };

    return (
        <div className="suggestion-container">
            <h1 style={{ fontFamily: "Apple Chancery", fontSize: "30px",  color: "#8b0000" }}>Suggestion Page</h1>
            <br/>
            <div>
                <label htmlFor="tastePreference">Taste Preference:</label>
                <select id="tastePreference">
                    <option value="spicy">Spicy</option>
                    <option value="mild">Mild</option>
                    <option value="sweet">Sweet</option>
                </select>
            </div>
            <div>
                <label htmlFor="dietaryPreference">Dietary Preference:</label>
                <select id="dietaryPreference">
                    <option value="vegetarian">Vegetarian</option>
                    <option value="non-vegetarian">Non-vegetarian</option>
                </select>
            </div>
            <div>
                <label htmlFor="cheeseType">Cheese Type:</label>
                <select id="cheeseType">
                    <option value="cheddar">Cheddar</option>
                    <option value="mozzarella">Mozzarella</option>
                    <option value="none">None</option>
                </select>
            </div>
            <div className="checkbox-container">
                <label>Sauces:</label>
                <input type="checkbox" id="ketchup" name="sauces" value="ketchup" />
                <label htmlFor="ketchup"> Ketchup</label>
                <input type="checkbox" id="mayonnaise" name="sauces" value="mayonnaise" />
                <label htmlFor="mayonnaise"> Mayonnaise</label>
                <input type="checkbox" id="bbqSauce" name="sauces" value="bbqSauce" />
                <label htmlFor="bbqSauce"> BBQ Sauce</label>
                <input type="checkbox" id="tandoori sauce" name="sauces" value="tandoori sauce" />
                <label htmlFor="tandoori sauce"> Tandoori Sauce</label>
                <input type="checkbox" id="chocolate" name="sauces" value="chocolate" />
                <label htmlFor="chocolate"> Chocolate</label>
            </div>
            <button onClick={handleRecommendation}>Recommend</button>
            <div id="recommendations">
                {recommendations.length > 0 && (
                    <>
                        <h2>Recommendations</h2>
                       
                        <ul>
                            {recommendations.map((option, index) => (
                                <li key={index}>
                                    <br />
                                    <br />
                                    <br />
                                    <img className="fixed-size-image" src={option.image} alt= {option.name} />
                                    <br />
                                    <br />
                                    <strong>{option.name}</strong>
                                </li>
                            ))}
                        </ul>
                    </>
                )}
            </div>
        </div>
    );
};

export default SuggestionPage
