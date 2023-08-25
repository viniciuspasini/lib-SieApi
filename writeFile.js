import chalk, { Chalk } from 'chalk'
import fs from 'fs'

export async function writeFile(response){
    try {
        const path = process.env.TESTE == 'TRUE' ? './' : 'C:/CronJobs/SIE-API/'
        let dateParts = response.fecha.split('/')
        let dateObject = new Date(dateParts[2]+'-'+dateParts[1]+'-'+dateParts[0]);
        dateObject.setDate(dateObject.getDate() + 1)
        const nameFile = dateObject.getDate()+'-'+(dateObject.getMonth() + 1).toString().padStart(2, '0')+'-'+dateObject.getFullYear()+'.txt'
        await fs.promises.writeFile(path+nameFile,response.dato)
        console.log(chalk.green('fichero '+ nameFile +' creado'))
    } catch (err) {
        console.log(chalk.red('ERROR:'), err.message)
    }
}

