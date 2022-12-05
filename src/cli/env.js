const parseEnv = () => {

  let environmentVar = [];
  let envData = process.env;

  for (const [key, value] of Object.entries(envData)) {
    if (key.slice(0, 4) === "RSS_") {
      environmentVar.push(`${key}: ${value}`)
    }

  }
  environmentVar.forEach(el  => {
    console.log(el.replace(': ', "="))
  }) 
};

parseEnv();