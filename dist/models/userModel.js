"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _mongoose = _interopRequireDefault(require("mongoose"));
var schema = _mongoose["default"].Schema({
  firstname: {
    type: String,
    required: [true, 'Please add a firstname']
  },
  lastname: {
    type: String,
    required: [true, 'Please add a lastname']
  },
  username: {
    type: String,
    required: [true, 'Please add a name']
  },
  gender: {
    type: String,
    required: [true, 'Please add a gender']
  },
  dob: {
    type: String
  },
  address: {
    type: String
  },
  email: {
    type: String,
    required: [true, 'Please add a email'],
    unique: true
  },
  phone: {
    type: String,
    required: [true, 'Please add a phone'],
    unique: true
  },
  profileImage: {
    type: String
  },
  password: {
    type: String,
    required: [true, 'Please add a password']
  },
  role: {
    type: String,
    required: [true, 'Please add a rorle']
  }
});
var _default = _mongoose["default"].model('User', schema);
exports["default"] = _default;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJzY2hlbWEiLCJtb25nb29zZSIsIlNjaGVtYSIsImZpcnN0bmFtZSIsInR5cGUiLCJTdHJpbmciLCJyZXF1aXJlZCIsImxhc3RuYW1lIiwidXNlcm5hbWUiLCJnZW5kZXIiLCJkb2IiLCJhZGRyZXNzIiwiZW1haWwiLCJ1bmlxdWUiLCJwaG9uZSIsInByb2ZpbGVJbWFnZSIsInBhc3N3b3JkIiwicm9sZSIsIm1vZGVsIl0sInNvdXJjZXMiOlsiLi4vLi4vc3JjL21vZGVscy91c2VyTW9kZWwuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IG1vbmdvb3NlIGZyb20gXCJtb25nb29zZVwiXHJcblxyXG5jb25zdCBzY2hlbWEgPSBtb25nb29zZS5TY2hlbWEoe1xyXG4gICAgZmlyc3RuYW1lOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBhZGQgYSBmaXJzdG5hbWUnXSxcclxuICAgIH0sXHJcbiAgICBsYXN0bmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgYWRkIGEgbGFzdG5hbWUnXSxcclxuICAgIH0sXHJcbiAgICB1c2VybmFtZToge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgYWRkIGEgbmFtZSddLFxyXG4gICAgfSxcclxuICAgIGdlbmRlcjoge1xyXG4gICAgICAgIHR5cGU6IFN0cmluZyxcclxuICAgICAgICByZXF1aXJlZDogW3RydWUsICdQbGVhc2UgYWRkIGEgZ2VuZGVyJ10sXHJcbiAgICB9LFxyXG4gICAgZG9iOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIGFkZHJlc3M6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICB9LFxyXG4gICAgZW1haWw6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIGFkZCBhIGVtYWlsJ10sXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcGhvbmU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIGFkZCBhIHBob25lJ10sXHJcbiAgICAgICAgdW5pcXVlOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgcHJvZmlsZUltYWdlOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgfSxcclxuICAgIHBhc3N3b3JkOiB7XHJcbiAgICAgICAgdHlwZTogU3RyaW5nLFxyXG4gICAgICAgIHJlcXVpcmVkOiBbdHJ1ZSwgJ1BsZWFzZSBhZGQgYSBwYXNzd29yZCddLFxyXG4gICAgfSxcclxuICAgIHJvbGU6IHtcclxuICAgICAgICB0eXBlOiBTdHJpbmcsXHJcbiAgICAgICAgcmVxdWlyZWQ6IFt0cnVlLCAnUGxlYXNlIGFkZCBhIHJvcmxlJ10sXHJcbiAgICB9LFxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgbW9uZ29vc2UubW9kZWwoJ1VzZXInLCBzY2hlbWEpIl0sIm1hcHBpbmdzIjoiOzs7Ozs7O0FBQUE7QUFFQSxJQUFNQSxNQUFNLEdBQUdDLG9CQUFRLENBQUNDLE1BQU0sQ0FBQztFQUMzQkMsU0FBUyxFQUFFO0lBQ1BDLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsd0JBQXdCO0VBQzdDLENBQUM7RUFDREMsUUFBUSxFQUFFO0lBQ05ILElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsdUJBQXVCO0VBQzVDLENBQUM7RUFDREUsUUFBUSxFQUFFO0lBQ05KLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsbUJBQW1CO0VBQ3hDLENBQUM7RUFDREcsTUFBTSxFQUFFO0lBQ0pMLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUscUJBQXFCO0VBQzFDLENBQUM7RUFDREksR0FBRyxFQUFFO0lBQ0ROLElBQUksRUFBRUM7RUFDVixDQUFDO0VBQ0RNLE9BQU8sRUFBRTtJQUNMUCxJQUFJLEVBQUVDO0VBQ1YsQ0FBQztFQUNETyxLQUFLLEVBQUU7SUFDSFIsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQztJQUN0Q08sTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNEQyxLQUFLLEVBQUU7SUFDSFYsSUFBSSxFQUFFQyxNQUFNO0lBQ1pDLFFBQVEsRUFBRSxDQUFDLElBQUksRUFBRSxvQkFBb0IsQ0FBQztJQUN0Q08sTUFBTSxFQUFFO0VBQ1osQ0FBQztFQUNERSxZQUFZLEVBQUU7SUFDVlgsSUFBSSxFQUFFQztFQUNWLENBQUM7RUFDRFcsUUFBUSxFQUFFO0lBQ05aLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsdUJBQXVCO0VBQzVDLENBQUM7RUFDRFcsSUFBSSxFQUFFO0lBQ0ZiLElBQUksRUFBRUMsTUFBTTtJQUNaQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLEVBQUUsb0JBQW9CO0VBQ3pDO0FBQ0osQ0FBQyxDQUFDO0FBQUEsZUFFYUwsb0JBQVEsQ0FBQ2lCLEtBQUssQ0FBQyxNQUFNLEVBQUVsQixNQUFNLENBQUM7QUFBQSJ9