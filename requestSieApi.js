import chalk from 'chalk'
import https from 'https'
import fs from 'fs'
import { promises } from 'dns'
import 'dotenv/config';


export async function requestSieApi(){
    
    return new Promise((resolve, reject) =>{
        
        const url = 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/'+process.env.ID_SERIE+'/datos/oportuno?token='+process.env.TOKEN
         
        fetch(url)
        .then(async (response) => {
            let retorno = await response.json()
            retorno = retorno.bmx.series[0].datos[0]
            resolve(retorno)
        })
        .catch(err => {
            reject(err.message)
        })

    })
}