import userController from '../controllers/userController';
import { validateCreate } from '../middlewares/validator';

const { createUser } = userController;

const userRoutes = (router) => {
  router.route('/user/create')
    .post(validateCreate, createUser);
};

export default userRoutes;
