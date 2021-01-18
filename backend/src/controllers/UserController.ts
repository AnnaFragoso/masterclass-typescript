import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
    { name: 'Anna', email: 'anna.barbara.fragoso@hotmail.com' },
]

export default {
    async index(req: Request, res: Response) {
        return res.json(users)
    },

    async create(req: Request, res: Response) {
        const emailService = new EmailService()

        emailService.sendMail({
            to: {
                 name: 'Anna', 
                 email: 'anna.barbara.fragoso@hotmail.com'
            },
            message: { 
                subject: 'Bem vinda ao sistema', 
                body: 'Seu email foi enviado com sucesso!!! :)'
            }  
        })
    
        return res.send();
    }
}