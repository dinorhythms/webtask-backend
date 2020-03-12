import userController from '../controllers/userController';
import validator from '../middlewares/validator';

const { validateCreate, validateUpdate } = validator;
const { createUser, updateUser, getAll } = userController;

const userRoutes = (router) => {
  router.route('/users/create')
    .post(validateCreate, createUser);
  router.route('/users/update/:id')
    .patch(validateUpdate, updateUser);
  router.route('/users')
    .get(getAll);
};

export default userRoutes;
