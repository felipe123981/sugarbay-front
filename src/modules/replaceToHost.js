function replaceTo(host) {
  const replacedHost = '10.1.1.103';
  const resultString = host.replace("localhost", replacedHost);
  return resultString;
}

export default replaceTo;
