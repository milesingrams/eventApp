'use strict';

import {Router} from 'express';
import * as controller from './utils.controller';
import * as auth from '../../auth/auth.service';

var router = new Router();

router.get('/checkEmail', controller.checkEmail);

module.exports = router;
