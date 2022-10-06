/* const routes = require('express').Router({}) */
const express = require('express');
const router = express.Router();
const userController = require('../controllers/usersController');
/*  */
//Get all users
/**
 * @swagger
 * /api/users:
 *  get:
 *    description: Fetches all users
 *    responses:
 *        '200':
 *            description: A successfull response
 */

router.get('/', userController.get_all_users);

router.get('/:userId', userController.get_a_user);

/**
 * @swagger
 * /api/users/login:
 *  post:
 *    description: Get user details for the given user name and password
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Find a user with username and password combination
 *        schema:
 *          type: object
 *          required:
 *            - userName
 *            - password
 *          properties:
 *              userName:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *        '200':
 *            description: A successfull response
 *        '500':
 *            description: Techinal exception
 */
router.post('/login', userController.login_a_user);

/**
 * @swagger
 * /api/users/signin:
 *  post:
 *    description: Creates a new user
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Create new user
 *        schema:
 *          type: object
 *          required:
 *            - userName
 *            - firstName
 *            - lastName
 *            - email
 *            - password
 *          properties:
 *              userName:
 *                type: string
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *
 *
 *    responses:
 *        '200':
 *            description: A successfull response
 *        '500':
 *            description: Techinal problem
 */
router.post('/signin', userController.sign_a_user);

/**
 * @swagger
 * /api/users/{userName}:
 *  patch:
 *    description: Update a user with the given user name
 *    produces:
 *      - application/json
 *    parameters:
 *      - in: body
 *        name: user
 *        description: Create new user
 *        schema:
 *          type: object
 *          required:
 *            - userName
 *          properties:
 *              userName:
 *                type: string
 *              firstName:
 *                type: string
 *              lastName:
 *                type: string
 *              email:
 *                type: string
 *              password:
 *                type: string
 *    responses:
 *        '200':
 *            description: A successfull response
 *        '500':
 *            description: Techinal exception
 */

router.patch('/:userId', userController.update_a_user);

/**
 * @swagger
 * /api/users/{userName}:
 *  delete:
 *    description: Delete a user with the given user name
 *    produces:
 *      - application/json
 *    parameters:
 *      - name: userName
 *        description: User name
 *        in: path
 *        required: true
 *        type: string
 *    responses:
 *        '200':
 *            description: A successfull response
 *        '500':
 *            description: Techinal exception
 */

router.delete('/:userId', userController.delete_user);

module.exports = router;
