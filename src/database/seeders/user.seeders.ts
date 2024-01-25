import { Injectable } from '@nestjs/common';
import { CataloguesService } from '../../modules/core/services/catalogues.service';
import { CreateTimeDto } from 'src/modules/core/dto/time/create-time.dto';
import { TimeDetailService } from 'src/modules/core/services/time-detail.service';
import { UsersService } from '@auth/services';
import { CreateUserDto } from '@auth/dto';
import { CatalogueEntity } from '@core/entities';

@Injectable()
export class UserSeeder {
  constructor(private userServie: UsersService, private catalogueService: CataloguesService) {}
  async run() {
    await this.createUser();
  }

  private async createUser() {
    const state = (await this.catalogueService.findAll()).data

    const habita = state.find((state) =>{
      return state.name == 'Habita'
    })
    const noHabita = state.find((state) =>{
      return state.name == 'No habita'
    })

    const catalogues: CreateUserDto[] = [];
    catalogues.push(
      {
        name: 'Administrador',
        lastname: 'admin',
        cellPhone: '0000000000',
        email: 'admin@correo.com',
        identification: '0000000000',
        password: 'admin1234',
        state: habita,
      },
      {
        name: 'Evelio Alfredo',
        lastname: 'Granizo Montalvo',
        cellPhone: '0999731340',
        email: 'eagranizo@espe.edu.ec',
        identification: '1705681953',
        password: 'false&User#2121',
        state: noHabita,
      },
      // {
      //   name: 'Amadeo Agustin',
      //   lastname: 'Sotomayor Torres',
      //   cellPhone: 'SD',
      //   email: 'SC',
      //   identification: '1102293758',
      //   password: 'false&User#2121',
      //   state: false,
      // },
      // {
      //   name: 'Franklin Edmundo',
      //   lastname: 'Condor Maigualca',
      //   cellPhone: '0997100251',
      //   email: 'fecondor@yahoo.com',
      //   identification: '1704895786',
      //   password: 'false&User#2121',
      //   state: false,
      // },
      // {
      //   name: 'Miguel Oviedo',
      //   lastname: 'Garzon',
      //   cellPhone: '0999242983',
      //   email: 'miogar@yahoo.es',
      //   identification: '1701105395',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Irina Alexandra',
      //   lastname: 'Guerron Guerrero',
      //   cellPhone: '0979101661 / 0998609131',
      //   email: 'Irinaguerron@hotmail.com',
      //   identification: '1500316813',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Erika Lorena',
      //   lastname: 'Urbano Vargas',
      //   cellPhone: '0998938334 / 0998351522',
      //   email: 'eri_urbano@yahoo.es',
      //   identification: '1720088507',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Luis Alberto',
      //   lastname: 'Rengel Ojeda',
      //   cellPhone: '0987906770',
      //   email: ' luisalberto2452@hotmail.com',
      //   identification: '1711532331',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Lonardo',
      //   lastname: 'Ulloa',
      //   cellPhone: '0987060056',
      //   email: 'verog0184@hotmail.com',
      //   identification: 'SI',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Alejandro Daniel',
      //   lastname: 'Paredes Salgado',
      //   cellPhone: '0987046875',
      //   email: 'marciateodora49@hotmail.com',
      //   identification: '1000032274',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Oswaldo Fabian',
      //   lastname: 'Valenzuela Arias',
      //   cellPhone: 'ST',
      //   email: 'dataradio@andinanet.net',
      //   identification: '1001289071',
      //   password: 'false&User#2121',
      //   state: false,
      // },
      // {
      //   name: 'San Martin Renato',
      //   lastname: 'Segarra Bernabe',
      //   cellPhone: '0984586098',
      //   email: 'renatosanmartin@hotmail.com',
      //   identification: '1710248442',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Christian Raul',
      //   lastname: 'Espinoza Martinez',
      //   cellPhone: '0984375375',
      //   email: 'crespinozam@ejercito.mil.ec',
      //   identification: '1710873322',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Juventino Gonzalo',
      //   lastname: 'Lojan Davila',
      //   cellPhone: '0992838094',
      //   email: 'gina85_1@hotmail.com',
      //   identification: 'SC',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Dani',
      //   lastname: 'Avila',
      //   cellPhone: '0987002192',
      //   email: 'Sc',
      //   identification: 'SC',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Daniel Alfonso',
      //   lastname: 'Yánez Quintana',
      //   cellPhone: '0995092627',
      //   email: 'dannpol@gmail.com',
      //   identification: '1715469936',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Luis Bolívar',
      //   lastname: 'Andrade Freire',
      //   cellPhone: '0984619185',
      //   email: 'bolivarandrade@outlook.com',
      //   identification: '1719127464',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Nelson Eduardo',
      //   lastname: 'Cuenca Riofrio',
      //   cellPhone: '0984286532',
      //   email: 'graficasncr@hotmail.com',
      //   identification: '1102294483',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Carmen Amelia',
      //   lastname: 'Avila Proaño',
      //   cellPhone: 'ST',
      //   email: 'cavila@uio.satnet.net',
      //   identification: '1706340609',
      //   password: 'false&User#2121',
      //   state: false,
      // },
      // {
      //   name: 'Ivan Eduardo',
      //   lastname: 'Segovia Teran',
      //   cellPhone: '0995415928',
      //   email: 'lycanivan@yahoo.es',
      //   identification: '0501756969',
      //   password: 'false&User#2121',
      //   state: true,
      // },
      // {
      //   name: 'Carlos Virgilio',
      //   lastname: 'Rodrigez Reyes',
      //   cellPhone: '0996044786',
      //   email: 'calolorr59@hotmail.com',
      //   identification: '1705988754',
      //   password: 'false&User#2121',
      //   state: true,
      // },

      //   {
      //     name: 'Irina Alexandra',
      //     lastname: 'Guerron Guerrero',
      //     cellPhone: '0979101661 / 0998609131',
      //     email: 'Irinaguerron@hotmail.com',
      //     identification: '1500316813',
      //     password: 'false&User#2121',
      //     state: true
      //   },
      //   {
      //     name: 'Erika Lorena',
      //     lastname: 'Urbano Vargas',
      //     cellPhone: '0998938334 / 0998351522',
      //     email: 'eri_urbano@yahoo.es',
      //     identification: '1720088507',
      //     password: 'false&User#2121',
      //     state: true
      //   },
      //   {
      //     name: 'Luis Alberto',
      //     lastname: 'Rengel Ojeda',
      //     cellPhone: '0987906770',
      //     email: ' luisalberto2452@hotmail.com',
      //     identification: '1711532331',
      //     password: 'false&User#2121',
      //     state: true
      //   },
      //   {
      //     name: 'Lonardo',
      //     lastname: 'Ulloa',
      //     cellPhone: '0987060056',
      //     email: 'verog0184@hotmail.com',
      //     identification: 'SI',
      //     password: 'false&User#2121',
      //     state: true
      //   },
      //   {
      //     name: 'Alejandro Daniel',
      //     lastname: 'Paredes Salgado',
      //     cellPhone: '0987046875',
      //     email: 'marciateodora49@hotmail.com',
      //     identification: '1000032274',
      //     password: 'false&User#2121',
      //     state: true
      //   },
      //   {
      //     name: 'Oswaldo Fabian',
      //     lastname: 'Valenzuela Arias',
      //     cellPhone: 'ST',
      //     email: 'dataradio@andinanet.net',
      //     identification: '1001289071',
      //     password: 'false&User#2121',
      //     state: false
      //   },
      //   {
      //     name: 'San Martin Renato',
      //     lastname: 'Segarra Bernabe',
      //     cellPhone: '0984586098',
      //     email: 'renatosanmartin@hotmail.com',
      //     identification: '1710248442',
      //     password: 'false&User#2121',
      //     state: true
      //   },
      //   {
      //     name: 'Christian Raul',
      //     lastname: 'Espinoza Martinez',
      //     cellPhone: '0984375375',
      //     email: 'crespinozam@ejercito.mil.ec',
      //     identification: '1710873322',
      //     password: 'false&User#2121',
      //     state: true
      //   },
      //   {
      //     name: 'Juventino Gonzalo',
      //     lastname: 'Lojan Davila',
      //     cellPhone: '0992838094',
      //     email: 'gina85_1@hotmail.com',
      //     identification: 'SC',
      //     password: 'false&User#2121',
      //     state: true
      //   },
      //   {
      //     name: 'Dani',
      //     lastname: 'Avila',
      //     cellPhone: '0987002192',
      //     email: 'Sc',
      //     identification: 'SC',
      //     password: 'false&User#2121',
      //     state: true
      //   },
      //   {
      //     name: 'Daniel Alfonso',
      //     lastname: 'Yánez Quintana',
      //     cellPhone: '0995092627',
      //     email: 'dannpol@gmail.com',
      //     identification: '1715469936',
      //     password: 'false&User#2121',
      //     state: true
      //   },
      //   {
      //     name: 'Luis Bolívar',
      //     lastname: 'Andrade Freire',
      //     cellPhone: '0984619185',
      //     email: 'bolivarandrade@outlook.com',
      //     identification: '1719127464',
      //     password: 'false&User#2121',
      //     state: true
      //   },
    );

    for (const catalogue of catalogues) {
      await this.userServie.create(catalogue);
    }
  }
}
