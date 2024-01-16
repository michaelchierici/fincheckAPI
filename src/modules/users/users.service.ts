import { Injectable } from '@nestjs/common';
import { UserRepository } from 'src/shared/database/repositories/users.repositories';

@Injectable()
export class UsersService {
  constructor(private readonly usersRepository: UserRepository) {}

  async getUserById(userId: string) {
    const user = await this.usersRepository.findUnique({
      where: {
        id: userId,
      },
      select: {
        id: true,
        name: true,
        email: true,
      },
    });

    return user;
  }
}
