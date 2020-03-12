import userController from '../controllers/userController';
import validator from '../middlewares/validator';

const { validateCreate, validateUpdate } = validator;
const { createUser, updateUser } = userController;

const userRoutes = (router) => {
  router.route('/user/create')
    .post(validateCreate, createUser);
  router.route('/user/update/:id')
    .patch(validateUpdate, updateUser);
};

export default userRoutes;
