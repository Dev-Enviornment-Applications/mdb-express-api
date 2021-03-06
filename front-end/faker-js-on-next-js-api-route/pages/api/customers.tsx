import faker from 'faker'
import { NextApiRequest, NextApiResponse } from "next";



export default async (req: NextApiRequest, res: NextApiResponse) => { 

const limit = JSON.parse(req.body)?.limit ?? 10

  const customers = [...new Array(limit)].map((_, index) => {
    return {
      id: index,
      avartar: faker.image.avatar(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      streetAddress: faker.address.streetAddress(),
      city: faker.address.city(),
      state_abbr: faker.address.stateAbbr(),
      zipcode: faker.address.zipCode(),
    }
  })

  res.status(200).json(JSON.stringify(customers))
}