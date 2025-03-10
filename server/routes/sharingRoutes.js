const {Router} = require("express");
const {authenticateUser,authPermissions} = require('../middleware/authUser')

const router = Router();

const controller = require('../controllers/shareRequestController')

router.route('/requests').get(controller.getAllShareRequests);
router.route('/requests').post(controller.postShareRequest);

module.exports = router;