"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _express = _interopRequireDefault(require("express"));
var _protectRoute = _interopRequireDefault(require("../middleware/protectRoute.js"));
var _userController = require("../controllers/userController.js");
var router = _express["default"].Router();
router.post('/register', _userController.registerUser);
router.post('/login', _userController.userLogin);
router.get('/profile', _protectRoute["default"], _userController.getUserProfile);
router.put('/profile', _protectRoute["default"], _userController.updateUserProfile);
var _default = router;
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJyb3V0ZXIiLCJleHByZXNzIiwiUm91dGVyIiwicG9zdCIsInJlZ2lzdGVyVXNlciIsInVzZXJMb2dpbiIsImdldCIsInByb3RlY3QiLCJnZXRVc2VyUHJvZmlsZSIsInB1dCIsInVwZGF0ZVVzZXJQcm9maWxlIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL3JvdXRlcnMvdXNlclJvdXRlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBleHByZXNzIGZyb20gXCJleHByZXNzXCI7XHJcbmltcG9ydCBwcm90ZWN0IGZyb20gXCIuLi9taWRkbGV3YXJlL3Byb3RlY3RSb3V0ZS5qc1wiXHJcbmltcG9ydCB7IHJlZ2lzdGVyVXNlciwgdXNlckxvZ2luLCBnZXRVc2VyUHJvZmlsZSwgdXBkYXRlVXNlclByb2ZpbGUgfSBmcm9tIFwiLi4vY29udHJvbGxlcnMvdXNlckNvbnRyb2xsZXIuanNcIlxyXG5cclxuY29uc3Qgcm91dGVyID0gZXhwcmVzcy5Sb3V0ZXIoKVxyXG5cclxucm91dGVyLnBvc3QoJy9yZWdpc3RlcicsIHJlZ2lzdGVyVXNlcilcclxucm91dGVyLnBvc3QoJy9sb2dpbicsIHVzZXJMb2dpbilcclxucm91dGVyLmdldCgnL3Byb2ZpbGUnLCBwcm90ZWN0LCBnZXRVc2VyUHJvZmlsZSlcclxucm91dGVyLnB1dCgnL3Byb2ZpbGUnLCBwcm90ZWN0LCB1cGRhdGVVc2VyUHJvZmlsZSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHJvdXRlciJdLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUVBLElBQU1BLE1BQU0sR0FBR0MsbUJBQU8sQ0FBQ0MsTUFBTSxFQUFFO0FBRS9CRixNQUFNLENBQUNHLElBQUksQ0FBQyxXQUFXLEVBQUVDLDRCQUFZLENBQUM7QUFDdENKLE1BQU0sQ0FBQ0csSUFBSSxDQUFDLFFBQVEsRUFBRUUseUJBQVMsQ0FBQztBQUNoQ0wsTUFBTSxDQUFDTSxHQUFHLENBQUMsVUFBVSxFQUFFQyx3QkFBTyxFQUFFQyw4QkFBYyxDQUFDO0FBQy9DUixNQUFNLENBQUNTLEdBQUcsQ0FBQyxVQUFVLEVBQUVGLHdCQUFPLEVBQUVHLGlDQUFpQixDQUFDO0FBQUEsZUFFbkNWLE1BQU07QUFBQSJ9