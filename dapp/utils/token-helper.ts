export const noExponents = (num: string) => {
  let data = String(num).split(/[eE]/);
  if (data.length === 1) return data[0];

  let z = "",
    sign = Number(num) < 0 ? "-" : "",
    str = data[0].replace(".", ""),
    mag = Number(data[1]) + 1; /* from www.java2s.com */

  if (mag < 0) {
    z = sign + "0.";
    while (mag++) z += "0";
    return z + str.replace(/^\-/, "");
  }

  mag -= str.length;
  while (mag--) z += "0";
  return str + z;
};
