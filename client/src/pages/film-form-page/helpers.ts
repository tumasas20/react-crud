const isStringArray = (
  arr: Array<unknown | string>,
): arr is string[] => arr.every((str) => typeof str === 'string');

export const getFilmFormValues = (form: HTMLFormElement | undefined): Omit<FilmModel, 'id'> => {
  const formData = new FormData(form);
  const title = formData.get('title');
  if (typeof title !== 'string') throw new Error('Missing Title');
  if (title.length < 2) throw new Error('Title must have at least 2 symbols');

  const year = formData.get('year');
  if (typeof year !== 'string') throw new Error('Missing year');
  if (year.length < 4) throw new Error('Year must have at least 4 numbers');

  const role = formData.get('role');
  if (typeof role !== 'string') throw new Error('Missing role');
  if (role.length < 2) throw new Error('Role must have at least 2 symbols');

  const fullname = formData.get('fullname');
  if (typeof fullname !== 'string') throw new Error('Missing Actor fullname');
  if (fullname.length < 2) throw new Error('Actor name must have at least 2 symbols');

  const rating = formData.get('rating');
  if (typeof rating !== 'string') throw new Error('Missing rating');
  if (rating.length < 1) throw new Error('Rating must have at least 1 number');

  const images = formData.getAll('images');
  if (!isStringArray(images)) throw new Error('All images must be strings');

  const values = {
    title,
    year,
    actor: {
      role,
      fullname,
    },
    rating: Number(rating),
    images: images.filter((img) => img !== ''),
  };

  return values;
};
