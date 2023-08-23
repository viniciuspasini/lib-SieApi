import chalk from 'chalk'
import fs from 'fs'
import { promises } from 'dns'
import 'dotenv/config';

export async function writeFile(response){
    try {
        const nameFile = response.fecha.replaceAll('/', '-')+'.txt'
        await fs.promises.writeFile('./'+nameFile,response.dato)
        console.log('fichero '+ nameFile +' creado')
    } catch (err) {
        console.log(err.message)
    }
}

