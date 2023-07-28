import chalk from 'chalk'
import https from 'https'
import fs from 'fs'

export function requestSieApi(){
    https.get('https://www.banxico.org.mx/SieAPIRest/service/v1/series/SF343410/datos/oportuno?token=151960bd63540fd8156acd39a6061b9cd3fb9eb6de8c72459610c0ac378d58c4', res => {
    let data = [];
    const headerDate = res.headers && res.headers.date ? res.headers.date : 'no response date';
    console.log('Status Code:', res.statusCode);
    console.log('Date in Response header:', headerDate);

    res.on('data', chunk => {
        data.push(chunk);
    });

    res.on('end', () => {
        console.log('Response ended: ');
        const returnRequest = JSON.parse(Buffer.concat(data).toString());
        console.log(returnRequest.bmx.series[0].datos[0]); 
        fs.writeFile('./'+returnRequest.bmx.series[0].datos[0].fecha.replaceAll('/', '-')+'.txt',returnRequest.bmx.series[0].datos[0].dato, err => {
            if(err){
                console.log(chalk.red(err))
             }
        })
    });
    }).on('error', err => {
    console.log(chalk.red('Error: ', err.message));
    });
}