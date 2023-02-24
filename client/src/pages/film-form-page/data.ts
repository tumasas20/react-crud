const title = {
  edit: 'Update Movie',
  create: 'Create Movie',
};
const btnText = {
  edit: 'Update',
  create: 'Create',
};
const color = {
  edit: 'warning',
  create: 'success',
} as const;
const colorMain = {
  edit: 'warning.main',
  create: 'success.main',
} as const;

export const getModeData = (mode: 'create' | 'edit') => ({
  title: title[mode],
  btnText: btnText[mode],
  color: color[mode],
  colorMain: colorMain[mode],
});
