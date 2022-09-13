import db from '../models/index';
import CRUDservice from '../services/CRUDservice.js';
let getHomePage = async (req, res) => {
	try {
		let data = await db.User.findAll();
		return res.render('homepage.ejs', {
			data: JSON.stringify(data)
		});
	} catch (e) {
		console.log(e);
	}
};

let getCrud = (req, res) => {
	res.render('crud.ejs');
};

let postCRUD = async (req, res) => {
	// let message = await CRUDservice.createNewUser(req.body);
	// console.log(message);
	await CRUDservice.createNewUser(req.body);

	return res.send('post crud form sever');
};

let displayGetCRUD = async (req, res) => {
	let data = await CRUDservice.getAllUser();
	console.log('--------------------------------');
	console.log(data);
	console.log('--------------------------------');

	return res.render('display-CRUD.ejs', {
		dataTable: data
	});
};

let a = {
	getHomePage: getHomePage,
	getCrud: getCrud,
	postCRUD: postCRUD,
	displayGetCRUD: displayGetCRUD
};
export default a;
