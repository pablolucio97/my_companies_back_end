import { container } from 'tsyringe';
import { IUserRepository } from '@modules/users/repositories/interfaces/user';
import { IUserTokenRepository } from '@modules/users/repositories/interfaces/token';
import { UsersRepository } from '@modules/users/repositories/implementation/usersRepository';
import { DateProvider } from '@shared/providers/dateProvider/implementation';
import { UserTokensRepository } from '@modules/users/repositories/implementation/usersTokensRepository';

container.registerSingleton<IUserRepository>('UsersRepository', UsersRepository)
container.registerSingleton<IUserTokenRepository>('UsersTokensRepository', UserTokensRepository)
container.registerSingleton('DateProvider', DateProvider)