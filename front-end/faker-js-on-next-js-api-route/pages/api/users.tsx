import faker from 'faker'
import { NextApiRequest, NextApiResponse } from "next";



export default async (req: NextApiRequest, res: NextApiResponse) => { 
  
let limit = JSON.parse(req.body)?.limit ?? 10

  const users = [...new Array(limit)].map((_, index) => {
    return {
      index,
      name: faker.name.findName(),
      city: faker.address.city(),
    }
  })

  res.status(200).json(JSON.stringify(users))
}