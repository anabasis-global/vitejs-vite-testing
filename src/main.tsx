import { createContext, render } from 'preact';
import { App } from './app.tsx';
import './index.css';

// import { scan } from 'rxjs';

import axios, { AxiosHeaders, Axios, AxiosBasicCredentials } from 'axios';

// let ctx = createContext('auth');
// let createAuth = () => (_username: string, _password: string) => {
//   let creds = {};

//   console.log(creds);
// };

render(<App data={[]} />, document.getElementById('app')!);
