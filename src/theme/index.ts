const colors = {
  white: 'white',
  black: 'black',
  green: '#0CA655',
};

const fontMaker = ({
  color = colors.black,
  align = 'left',
  fontSize = 14,
}: {
  color: string;
  fontSize: number;
  align: string;
}) => {
  return {
    color,
    fontSize,
    textAlign: align,
  };
};

const vScale = (v: number) => v;
const hScale = (h: number) => h;

export {colors, fontMaker, vScale, hScale};
