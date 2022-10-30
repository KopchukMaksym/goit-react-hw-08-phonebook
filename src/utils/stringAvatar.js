import { stringToColor } from './stringToColor';

export function stringAvatar(name) {
  let children = name.split(' ');
  if (children.length > 1) {
    children = `${name.split(' ')[0][0]}${name.split(' ')[1][0]}`;
  } else {
    children = `${name.split(' ')[0][0]}`;
  }
  return {
    sx: {
      bgcolor: stringToColor(name),
    },
    children,
  };
}
