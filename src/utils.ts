import Md5 from "./md5";

function generateShortNumericHash(data: string): string {
  if (typeof data !== "string") {
    throw new TypeError("Input data must be a string");
  }

  // Generate MD5 hash
  const md5Hash: Int32Array = Md5.hashStr(data, true);

  // XOR the first half of the digest with the second half
  const xorResult: Buffer = Buffer.alloc(md5Hash.length / 2);
  for (let i = 0; i < xorResult.length; i++) {
    xorResult[i] = md5Hash[i] ^ md5Hash[i + xorResult.length];
  }

  // Get the length of the original data
  const dataLength: Buffer = Buffer.alloc(4);
  dataLength.writeUInt32BE(data.length);

  // Concatenate the XOR result and data length
  const combinedBuffer: Buffer = Buffer.concat([xorResult, dataLength]);

  // Convert the combined buffer to a string of numeric characters
  let numericString: string = "";
  for (let i = 0; i < combinedBuffer.length; i++) {
    numericString += combinedBuffer[i].toString().padStart(3, "0");
  }

  return numericString;
}

export {
  generateShortNumericHash
};
