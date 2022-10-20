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

let getEditCRUD = async (req, res) => {
	let userId = req.query.id;
	console.log(userId);
	if (userId) {
		let userData = await CRUDservice.getUserInfoByID(userId);
		return res.render('editCRUD.ejs', {
			user: userData
		});
	} else {
		return res.send('user not found');
	}
};

let putCRUD = async (req, res) => {
	let data = req.body;
	let allUsers = await CRUDservice.updateUserData(data);
	// console.log(data);
	// console.log(allUsers);
	return res.render('display-CRUD.ejs', {
		dataTable: allUsers
	});
};

let deleteCRUD = async (req, res) => {
	let id = req.query.id;
	if (id) {
		await CRUDservice.deleteUserById(id);
		res.send('Delete done');
	} else {
		res.send('user not found');
	}
};
let a = {
	getHomePage: getHomePage,
	getCrud: getCrud,
	postCRUD: postCRUD,
	displayGetCRUD: displayGetCRUD,
	getEditCRUD: getEditCRUD,
	putCRUD: putCRUD,
	deleteCRUD: deleteCRUD
};
export default a;
