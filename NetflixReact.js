// The following are episodes for Arrested Development. 

const episodes = [
  { id: 's06e01', title: 'Pilot' },
  { id: 's06e02', title: 'Top Banana' },
  { id: 's06e03', title: 'Charity Drive' },
  { id: 's06e04', title: 'Visiting Ours' },
  { id: 's06e05', title: 'My Mother, the Car' },
  { id: 's06e06', title: 'In God We Trust' },
  { id: 's06e07', title: 'Storming the castle' },
  { id: 's06e08', title: 'Pier Pressure' },
  { id: 's06e09', title: 'Public Relations' },
];


const finaleEpisode = { id: 's06e10', title: 'Bringing Up Buster' };


 // Add this finaleEpisode to the episodes object  and save that into addToPlaylist.
const addToPlaylist = episodes.concat(finaleEpisode);

// You may want to add a function which takes away the current episode you were just watching and returns the new object consisting only of the 
// rest of the episodes which you have not viewed yet.

for (episodes.length){
	if (episodes.id === s06e01){
    	episodeRemove = episodes.filter(function(episodes.id) {
    	return episodes !== episodes.id;
    	});	
    }
	
	else if (episodes.id === s06e02){
	    episodeRemove = episodes.filter(function(episodes.id) {
    	return episodes !== episodes.id;
    	});
    }	

	else if (episodes.id === s06e03){
	    episodeRemove = episodes.filter(function(episodes.id) {
    	return episodes !== episodes.id;
    	});
    }

    else if (episodes.id === s06e04){
	    episodeRemove = episodes.filter(function(episodes.id) {
    	return episodes !== episodes.id;
    	});
    }

    else if (episodes.id === s06e05){
	    episodeRemove = episodes.filter(function(episodes.id) {
    	return episodes !== episodes.id;
    	});
    }

    else if (episodes.id === s06e06){
	    episodeRemove = episodes.filter(function(episodes.id) {
    	return episodes !== episodes.id;
    	});
    }

    else if (episodes.id === s06e07){
	    episodeRemove = episodes.filter(function(episodes.id) {
    	return episodes !== episodes.id;
    	});
    }

    else if (episodes.id === s06e08){
	    episodeRemove = episodes.filter(function(episodes.id) {
    	return episodes !== episodes.id;
    	});
    }

    else if (episodes.id === s06e09){
	    episodeRemove = episodes.filter(function(episodes.id) {
    	return episodes !== episodes.id;
    	});
    }

    else if (episodes.id === s06e10){
	    episodeRemove = episodes.filter(function(episodes.id) {
    	return episodes !== episodes.id;
    	});
    }

    else
    return episodes;
}




//var newArray = arr.filter(callback[, thisArg])
//const removeFromPlaylist = episodes.filter(item=> )

// You might want to create a function which shows the viewer the next episode. 
// ** this would be a useful function after you have filtered or sliced the previous episode object out of the array ** 
const getNextEpisodeInPlaylist = 