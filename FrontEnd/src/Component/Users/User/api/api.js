const API = process.env.REACT_APP_API;

exports.getUserById = (userId, token) => {
	return fetch(`${API}/getUser/:${userId}`,{
        method:"get",
        headers:{
            'Content-Type':"application/json",
            
                }
    })
		.then((response) => response.json())
		.then((result) => result)
		.catch((err) => console.log(err));
};

exports.getAllUser = (userId, token) => {
	return fetch(`${API}/getAllUser/:${userId}`)
		.then((response) => response.json())
		.then((result) => result)
		.catch((err) => console.log(err));
};