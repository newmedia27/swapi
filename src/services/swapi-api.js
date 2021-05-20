const baseUrl = process.env.REACT_APP_BASE_URL;

export const getItems = async (value = null) => {
  const url = [baseUrl];
  if (value) {
    url.push(value);
  }
  const response = await fetch(`${url.join('')}`);
  return await response.json();
};
