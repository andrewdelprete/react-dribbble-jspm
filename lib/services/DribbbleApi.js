import $ from "jquery"

var API = "http://api.dribbble.com"

var DribbbleApi = {
   	getByListType: (list) => {
   		var list = list ? list : 'popular';
        return $.ajax({
        	url: API + "/shots/" + list,
			dataType: "jsonp"
		}); 
    },   	

    getShotById: (id) => {
        return $.ajax({
        	url: API + "/shots/" + id,
			dataType: "jsonp"
		}); 
    },
};

export default DribbbleApi;