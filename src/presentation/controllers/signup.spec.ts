import { SignUpController } from './signup'

describe('SignUp Controller', () => {
  test('should return 400 if no name is provided ', () => {
  // sut = system under test. Padrão para chamadas de classes instanciadas.
    const sut = new SignUpController()
    const httpRequest = {
      body: {
        email: 'any_email@mail.com',
        password: 'any_password',
        passwordConfirmation: 'any_password'
      }
    }
    const httpResponse = sut.handle(httpRequest)
    expect(httpResponse.statusCode).toBe(400)
    expect(httpResponse.body).toEqual(new Error('No name provided'))
  })
})
