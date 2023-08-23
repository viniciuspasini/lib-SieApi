import chalk from 'chalk'
import https from 'https'
import fs from 'fs'
import { promises } from 'dns'

export async function requestSieApi(){
    
    return new Promise((resolve, reject) =>{
        
        const url = 'https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF343410/datos/oportuno?token=151960bd63540fd8156acd39a6061b9cd3fb9eb6de8c72459610c0ac378d58c4'
         
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