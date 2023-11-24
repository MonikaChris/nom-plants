import { rest } from 'msw';

export const handlers = [
  rest.get(`${process.env.REACT_APP_SERVER}/api/weeks/9-25-2023`, (req, res, ctx) => {
    return res(ctx.status(200),
    ctx.json([
      {
        date: "9-25-2023",
        plants: ["Spinach", "Broccoli", "Tomatoes"],
        username: "user"
      }

    ]))
  })
]