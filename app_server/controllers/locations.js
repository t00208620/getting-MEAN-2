/* GET 'home' page */
const homelist = function(req, res){
res.render('locations-list', {
title: 'Loc8r - find a place to work with wifi',
});
};



/* GET 'Location info' page */
const locationInfo = function(req, res){
  res.render('location-info', { title: 'Location info' });
};

/* GET 'Add review' page */
const addReview = function(req, res){
  res.render('location-review-form', { title: 'Add review',
  title: 'Loc8r - find a place to work with wifi',
  pageHeader: { 
  title: 'Loc8r', 
  strapline: 'Find places to work with wifi near to you!' 
  },
  locations: [{ 
  name: 'Fatarcups',
  address: '125 High Street, Reading, RG6 1PS',
  rating: 3,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  distance: '100m'
  },{
  name: 'Cafe Hero',
  address: '125 High Street, Reading, RG6 1PS',
  rating: 4,
  facilities: ['Hot drinks', 'Food', 'Premium wifi'],
  distance: '200m'
  },{
  name: 'Burger Queen',
  address: '125 High Street, Reading, RG6 1PS',
  rating: 1,
  facilities: ['Food', 'Premium wifi'],
  distance: '250m'
  
  }]
});

};

module.exports = {
  homelist,
  locationInfo,
  addReview
};