export const readStream = async (stream: ReadableStream<string>) => {
  const reader = stream.getReader();
  let result = "";

  while (true) {
    const { done, value } = await reader.read();

    if (done) break;

    result += value;
  }

  return result;
};
