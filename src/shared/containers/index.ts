import { container } from 'tsyringe';
import { IUserRepository } from '@modules/users/repositories/interfaces/user';
import { UsersRepository } from '@modules/users/repositories/implementation/usersRepository';

container.registerSingleton<IUserRepository>('UsersRepository', UsersRepository)