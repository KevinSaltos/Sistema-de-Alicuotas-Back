import {BadRequestException, Inject, Injectable, NotFoundException, Req, Res, UnauthorizedException} from '@nestjs/common';
import {JwtService} from '@nestjs/jwt';
import * as Bcrypt from 'bcrypt';
import {Repository} from 'typeorm';
import {UserEntity} from '@auth/entities';
import {AuthRepositoryEnum } from '@shared/enums';
import {ServiceResponseHttpModel} from '@shared/models';
import { LoginDto } from '../dto/auth/login.dto';
import { PayloadTokenModel } from '../models/payload-token.models';

// const {PDFDocument} = require('pdfkit-table-ts');

@Injectable()
export class AuthService {
    private readonly MAX_ATTEMPTS = 3;

    constructor(
        @Inject(AuthRepositoryEnum.USER_REPOSITORY)
        private repository: Repository<UserEntity>,
        private jwtService: JwtService,
    ) {
    }


    async login(payload: LoginDto): Promise<ServiceResponseHttpModel> {
        const user: UserEntity = (await this.repository.findOne({
            where: {
                email: payload.email,
            },
        })) as UserEntity;

        if (!user || !(await this.checkPassword(payload.password, user))) {
            throw new UnauthorizedException(`Usuario y/o contraseña no válidos`);
        }

        if (!(await this.checkPassword(payload.password, user))) {
            throw new UnauthorizedException(`Usuario y/o contraseña no válidos`);
        }

        const userUpdate = await this.repository.findOne({
            where: {email: payload.email},
            select: {password: false}
        });

        const {password, ...userRest} = userUpdate;


        await this.repository.update(userUpdate.id, userRest);
        const accessToken = this.generateJwt(user);
        return {data: {user, accessToken}};
    }

    async logout() {
      }

    refreshToken(user: UserEntity): ServiceResponseHttpModel {
        const accessToken = this.generateJwt(user);

        return {data: {accessToken, user}};
    }

    private generateJwt(user: UserEntity): string {
        const expiresDate = new Date();

        expiresDate.setDate(expiresDate.getSeconds() + 10);

        const payload: PayloadTokenModel = {id: user.id, iat: new Date().getTime(), exp: expiresDate.getTime()};

        console.log(payload)
        return this.jwtService.sign(payload, {secret: '123'});
    }

    // private async findByUsername(username: string): Promise<UserEntity> {
    //     return (await this.repository.findOne({
    //         where: {
    //             username,
    //         },
    //     })) as UserEntity;
    // }

    private async checkPassword(passwordCompare: string, user: UserEntity): Promise<null | UserEntity> {
        const {password, ...userRest} = user;
        const isMatch = Bcrypt.compareSync(passwordCompare, password);

        if (isMatch) {
            await this.repository.save(userRest);
            return user;
        }

        await this.repository.save(userRest);

        return null;
    }

    // async generatePDF() {
    //     const pdf: Buffer = await new Promise(resolve => {
    //         const doc = new PDFDocument()

    //         doc.text('hello world', 100, 50);

    //         const buffer = [];
    //         doc.on('data', buffer.push.bind(buffer));
    //         doc.on('end', () => resolve(Buffer.concat(buffer)));
    //         doc.end();
    //     });

    //     const mailData: MailDataInterface = {
    //         to: 'cesar.tamayo0204@gmail.com',
    //         subject: MailSubjectEnum.RESET_PASSWORD,
    //         template: MailTemplateEnum.TEST,
    //         data: {
    //             token: 'asd'
    //         },
    //         attachments: [{filename: 'test.pdf', file: pdf}, {filename: 'test.pdf', path: 'test.pdf'}]
    //     }

    //     return await this.nodemailerService.sendMail(mailData);

    // }
}