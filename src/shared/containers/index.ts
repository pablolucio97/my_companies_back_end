import { container } from 'tsyringe';
import { IUserRepository } from '@modules/users/repositories/interfaces/user';
import { IUserTokenRepository } from '@modules/users/repositories/interfaces/token';
import { UsersRepository } from '@modules/users/repositories/implementation/usersRepository';
import { DateProvider } from '@shared/providers/dateProvider/implementation';
import { UserTokensRepository } from '@modules/users/repositories/implementation/usersTokensRepository';
import { CompaniesRepository } from '@modules/companies/repositories/implementations/companiesRepository';
import { ICompanyRepository } from '@modules/companies/repositories/interfaces/company';
import { PlacesRepository } from '@modules/places/repositories/implementations/placesRepository';
import { IPlaceRepository } from '@modules/places/repositories/interfaces/place';


container.registerSingleton<IUserRepository>('UsersRepository', UsersRepository)
container.registerSingleton<IUserTokenRepository>('UsersTokensRepository', UserTokensRepository)
container.registerSingleton<ICompanyRepository>('CompaniesRepository', CompaniesRepository)
container.registerSingleton<IPlaceRepository>('PlacesRepository', PlacesRepository)
container.registerSingleton('DateProvider', DateProvider)