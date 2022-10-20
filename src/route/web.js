import express from 'express';
import homeController from '../controllers/homeController.js';
import userController from '../controllers/userController.js';

let router = express.Router();

let initWebRouters = (app) => {
	router.get('/', homeController.getHomePage);
	router.get('/crud', homeController.getCrud);

	router.post('/crud-post', homeController.postCRUD);
	router.get('/crud-get', homeController.displayGetCRUD);
	router.get('/crud-edit', homeController.getEditCRUD);
	router.post('/crud-put', homeController.putCRUD);
	router.get('/crud-delete', homeController.deleteCRUD);

	router.post('/api/login', userController.handleLogin);
	router.get('/api/get-all-user', userController.handleGetAllUsers);
	router.post('/api/create-new-user', userController.handleCreateNewUser);
	router.put('/api/edit-user', userController.handleEditUser);
	router.delete('/api/delete-user', userController.handleDeleteUser);

	return app.use('/', router);
};

// module.exports = initWebRouters;
export default initWebRouters;
