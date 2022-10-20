import db from '../models/index';
import bcrypt from 'bcryptjs';

const salt = bcrypt.genSaltSync(10);

let hashUserPassword = (password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let hashPassword = await bcrypt.hashSync(password, salt);
			resolve(hashPassword);
		} catch (e) {
			reject(e);
		}
	});
};

let handleUserLogin = (email, password) => {
	return new Promise(async (resolve, reject) => {
		try {
			let userData = {};

			let isExist = await checkUserEmail(email);
			if (isExist) {
				//user already exists
				//compare password
				let user = await db.User.findOne({
					attributes: [ 'email', 'roleID', 'password' ],
					where: { email: email },
					raw: true
				});
				if (user) {
					let check = await bcrypt.compare(password, user.password);
					if (check) {
						userData.errCode = 0;
						userData.errMessage = 'Ok';

						delete user.password;
						userData.user = user;
					} else {
						userData.errCode = 3;
						userData.errMessage = 'Wrong password';
					}
				} else {
					userData.errCode = 2;
					userData.errMessage = 'User not found';
				}
			} else {
				//return error
				userData.errCode = 1;
				userData.errMessage = `Your's Email isn't exist in your system. Please try other email.`;
			}

			resolve(userData);
		} catch (e) {
			reject(e);
		}
	});
};

let checkUserEmail = (userEmail) => {
	return new Promise(async (resolve, reject) => {
		try {
			let user = await db.User.findOne({
				where: { email: userEmail }
			});
			if (user) {
				resolve(true);
			} else {
				resolve(false);
			}
		} catch (e) {
			reject(e);
		}
	});
};

let getAllUsers = (userId) => {
	return new Promise(async (resolve, reject) => {
		try {
			let users = '';
			if (userId === 'ALL') {
				users = await db.User.findAll({
					attributes: {
						exclude: [ 'password' ]
					}
				});
			}
			if (userId && userId !== 'ALL') {
				users = await db.User.findOne({
					where: { id: userId },
					attributes: {
						exclude: [ 'password' ]
					}
				});
			}

			resolve(users);
		} catch (e) {
			reject(e);
		}
	});
};

let createNewUser = (data) => {
	return new Promise(async (resolve, reject) => {
		//check email cos ton tai chua
		try {
			let check = await checkUserEmail(data.email);
			if (check === true) {
				resolve({
					error: 1,
					errMessage: 'Your email is already in use. Try other email'
				});
			} else {
				let hashPasswordFormBcrypt = await hashUserPassword(data.password);
				await db.User.create({
					email: data.email,
					password: hashPasswordFormBcrypt,
					firstName: data.firstName,
					lastName: data.lastName,
					address: data.address,
					phonenumber: data.phoneNumber,
					gender: data.gender === '1' ? true : false,
					roleid: data.roleID
				});
				resolve({
					errCode: 0,
					message: 'Ok'
				});
			}
		} catch (e) {
			reject(e);
		}
	});
};

let deleteUser = (userId) => {
	return new Promise(async (resolve, reject) => {
		try {
			let foundUser = await db.User.findOne({
				where: { id: userId }
			});

			if (!foundUser) {
				resolve({
					errCode: 2,
					message: `The user isn't exist`
				});
			}

			console.log('check delete', foundUser);
			await db.User.destroy({
				where: { id: userId }
			});
			resolve({
				errCode: 0,
				message: 'The user is deleted'
			});
		} catch (e) {
			reject(e);
		}
	});
};

let updateUserData = (data) => {
	return new Promise(async (resolve, reject) => {
		try {
			if (!data.id) {
				resolve({
					errCode: 2,
					message: 'Missing required parameter'
				});
			}
			let user = await db.User.findOne({
				where: { id: data.id },
				raw: false
			});
			if (user) {
				user.firstName = data.firstName;
				user.lastName = data.lastName;
				user.address = data.address;

				await user.save();

				resolve({
					errCode: 0,
					message: 'Update user success'
				});
			} else {
				resolve({
					errCode: 1,
					message: 'User not found'
				});
			}
		} catch (e) {
			console.log(e);
		}
	});
};
module.exports = {
	handleUserLogin: handleUserLogin,
	getAllUsers: getAllUsers,
	createNewUser: createNewUser,
	deleteUser: deleteUser,
	updateUserData: updateUserData
};