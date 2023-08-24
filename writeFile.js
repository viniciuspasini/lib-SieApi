import chalk, { Chalk } from 'chalk'
import fs from 'fs'

export async function writeFile(response){
    try {
        const path = process.env.TESTE == 'TRUE' ? './' : 'C:/CronJobs/SIE-API/'
        const nameFile = response.fecha.replaceAll('/', '-')+'.txt'
        await fs.promises.writeFile(path+nameFile,response.dato)
        console.log(chalk.green('fichero '+ nameFile +' creado'))
    } catch (err) {
        console.log(chalk.red('ERROR:'), err.message)
    }
}

