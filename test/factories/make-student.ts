import {
  Student,
  StudentProps,
} from '@/domain/forum/enterprise/entities/student'
import { faker } from '@faker-js/faker'
import { UniqueEntityId } from 'src/core/entities/unique-entity-id'

export function makeStudent(
  override: Partial<StudentProps> = {},
  id?: UniqueEntityId,
) {
  const student = Student.create(
    {
      name: faker.person.fullName(),
      email: faker.internet.email(),
      password: faker.internet.password(),
      ...override,
    },
    id,
  )

  return student
}
