import userService from '../services/userService';
import emailService from '../services/emailService';

let handleLogin = async (req, res) => {
	let email = req.body.email;
	let password = req.body.password;

	if (!email || !password) {
		return res.status(500).json({
			errCode: 1,
			message: 'Missing inputs parameter'
		});
	}
	let userData = await userService.handleUserLogin(email, password);

	return res.status(200).json({
		errCode: userData.errCode,
		message: userData.errMessage,
		user: userData.user ? userData.user : {}
	});
};

let handleGetAllUsers = async (req, res) => {
	let id = req.query.id;

	if (!id) {
		return res.status(200).json({
			errCode: 1,
			errMessage: 'Missing required parameters',
			users: []
		});
	}

	let users = await userService.getAllUsers(id);
	return res.status(200).json({
		errCode: 0,
		errMessage: 'Ok',
		users
	});
};

let handleCreateNewUser = async (req, res) => {
	let message = await userService.createNewUser(req.body);
	return res.status(200).json(message);
};

let handleDeleteUser = async (req, res) => {
	if (!req.body.id) {
		return res.status(200).json({
			errCode: 1,
			errMessage: 'Missing required parameters'
		});
	}

	let message = await userService.deleteUser(req.body.id);
	return res.status(200).json(message);
};
let handleEditUser = async (req, res) => {
	let data = req.body;
	let message = await userService.updateUserData(data);
	return res.status(200).json(message);
};

let getAllCode = async (req, res) => {
	try {
		let data = await userService.getAllCodeService(req.query.type);
		console.log(data);
		return res.status(200).json(data);
	} catch (e) {
		return res.status(200).json({
			errCode: -1,
			errMessage: 'Lỗi từ server'
		});
	}
};

let sendOrderMail = async (req, res) => {
	try {
		let email = req.body.email;
		let message = await emailService.sendEasyEmail(email);
		return res.status(200).json(message);
	} catch (e) {
		console.log(e);
		return res.status(200).json({
			errCode: -1,
			errMessage: 'Lỗi gửi email từ server'
		});
	}
};
module.exports = {
	handleLogin: handleLogin,
	handleGetAllUsers: handleGetAllUsers,
	handleCreateNewUser: handleCreateNewUser,
	handleEditUser: handleEditUser,
	handleDeleteUser: handleDeleteUser,
	getAllCode: getAllCode,
	sendOrderMail: sendOrderMail
};
