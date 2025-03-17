const jwt = require('jsonwebtoken');

const encrypt = (payload, secret) => {
  const token = jwt.sign(payload, secret, { expiresIn: '1h' });
  return token;
};

const testPayload = { user: 'alice', id: 789 };
const secret = 'mySecretKeyForJWT';
const token = encrypt(testPayload, secret);
console.log('Generated JWT Token:', token);

try {
  const decoded = jwt.verify(token, secret);
  console.log('Decoded Payload:', decoded);
} catch (error) {
  console.error('Token Verification Error:', error.message);
}

module.exports = encrypt;