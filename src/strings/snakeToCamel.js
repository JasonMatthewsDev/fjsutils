const snakeToCamel = str => str.replace(/(_[a-z1-9])/gi, $1 => $1.toUpperCase().replace('_', ''));

export default snakeToCamel;
