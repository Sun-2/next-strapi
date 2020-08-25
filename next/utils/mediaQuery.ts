export const sizes = {
  small: 600,
  medium: 1024,
  large: 1440,
  xlarge: 1920,
};

// Iterate through the sizes and create a media template
const media = (Object.keys(sizes) as Array<keyof typeof sizes>).reduce(
  (acc, label) => {
    acc[label] = `@media (min-width: ${sizes[label]}px)`;

    return acc;
  },
  {}
) as { [T in keyof typeof sizes]: string };

export default media;