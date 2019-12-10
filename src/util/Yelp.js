const apikey = 'n8YCnA3NHXTxb6Ev3MSnhxbGbjjKDTfLtiJpnHQm3P4U6vUeQCJ4r7noBNJYtla5lhxStja3Xyz6s6I5IEkQKe1wB6EP-Plx0qKCkY1RkV4vmngXCHY7F5FUf0LpXXYx';

const Yelp = {
    search(term, location, sortBy) {
        return fetch(`https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?term=${term}&location=${location}&sort_by=${sortBy}`, {
        
        headers: {Authorization: `Bearer ${apikey}`} 
}).then(response => {
    return response.json();
}).then(jsonResponse => {
    if (jsonResponse.businesses) {
        console.log(jsonResponse.businesses)
        return jsonResponse.businesses.map(business => ({
           id: business.id,
           imageSrc: business.image_url,
           name: business.name,
           address: business.location.address, 
           city: business.location.city, 
           state: business.location.state, 
           zipCode: business.location.zipCode, 
           category: business.categories[0].title, 
           rating: business.rating,
           reviewCount: business.review_Count
        }));
    }
})
    }
}
export default Yelp;