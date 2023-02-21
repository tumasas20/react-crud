type FilmModel = {
  id: string,
  title: string,
  year: string,
  actor: {
    role: string,
    fullname: string
  },
  images: string[],
  rating: number
};
