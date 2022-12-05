const parseArgs = () => {

  let props = [];
  let argData = process.argv;
  const [executer, file, ...rest] = argData;

  rest.forEach((el, index, rest) => {
    if (el.charAt(0) === "-") {
      props.push(`${el.slice(2)} is ${rest[index + 1]}`)

    }
  })
  props.forEach(el => {
    console.log(el)
  })

};


parseArgs();