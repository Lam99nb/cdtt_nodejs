import express from 'express';
import homeController from '../controllers/homeController.js';
import userController from '../controllers/userController.js';
import productController from '../controllers/productController.js';

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

	router.get('/api/get-all-product', productController.handleGetAllProducts);
	router.post('/api/create-new-product', productController.handleCreateNewProduct);
	router.put('/api/edit-product', productController.handleEditProduct);
	router.delete('/api/delete-product', productController.handleDeleteProduct);

	router.get('/api/get-all-code', userController.getAllCode);
	router.get('/api/get-top-product-home', productController.getTopProduct);
	router.get('/api/get-detail-product-by-id', productController.getDetailProductById);

	router.post('/api/send-email', userController.sendOrderMail);

	return app.use('/', router);
};

// module.exports = initWebRouters;
export default initWebRouters;
