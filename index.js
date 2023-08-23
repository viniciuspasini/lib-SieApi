import chalk from 'chalk';
import { requestSieApi } from './requestSieApi.js';
import { writeFile } from './writeFile.js';

requestSieApi()
.then((retorno) =>{
    writeFile(retorno)
})
.catch(err => {
    console.log(err)
})


