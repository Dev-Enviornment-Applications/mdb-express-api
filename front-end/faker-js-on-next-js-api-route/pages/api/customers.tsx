import faker from 'faker'

const limit = JSON.parse(req.body)?.limit ?? 10

export default (req, res) => {
  const customers = [...new Array(limit)].map((_, index) => {
    return {
      index,
      name: faker.name.findName(),
      city: faker.address.city(),
    }
  })

  res.status(200).json(JSON.stringify(customers))
}