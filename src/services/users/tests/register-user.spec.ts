import { expect, describe, it, beforeEach } from 'vitest'
import { RegisterUserService } from '../register-user'
import { compare } from 'bcryptjs'
import { InMemoryUsersRepository } from '@/repositories/in-memory-repositories/in-memory-users-repository'
import { UserAlreadyExistsError } from '@/services/errors/user-already-exists-error'

let usersRepository: InMemoryUsersRepository
let sut: RegisterUserService

describe('Register Service', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new RegisterUserService(usersRepository)
  })

  it('should be able to create', async () => {
    const { user } = await sut.execute({
      name: 'Fulano',
      email: 'fulano@email.com',
      password: '123456',
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should hash user password upon create', async () => {
    const { user } = await sut.execute({
      name: 'Fulano',
      email: 'fulano@email.com',
      password: '123456',
    })

    const isPasswordCorrectlyHashed = await compare(
      '123456',
      user.password_hash,
    )

    expect(isPasswordCorrectlyHashed).toBe(true)
  })

  it('should not be able to create with same email twice', async () => {
    const email = 'fulano@email.com'

    await sut.execute({
      name: 'Fulano',
      email,
      password: '123456',
    })

    await expect(() =>
      sut.execute({
        name: 'Fulano',
        email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(UserAlreadyExistsError)
  })
})
