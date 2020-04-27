import * as axios from 'axios';
import MockAdapter from 'axios-mock-adapter';

var mock = new MockAdapter(instance);
mock.onAny().reply(500);

var instance = axios.create();
instance.defaults.baseURL = serverURL;
instance.defaults.timeout = 20000;
//...
//and other options

export { instance as default };