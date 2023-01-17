export const verifyExpirySession = (expiryDate) => {
  console.log('expiry date', expiryDate);
  return expiryDate < Date.now();
};
