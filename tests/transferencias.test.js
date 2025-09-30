import http from 'k6/http';
import { sleep, check } from 'k6';
import { obterToken } from '../helpers/autenticacao.js';
const postTransferencias = JSON.parse(open('../fixtures/postTransferencias.json'))

export const options = {
  iterations: 1,
};

export default function () {
  const token = obterToken()

  const url = ('http://localhost:3000/Transferencias')

  const payload = JSON.stringify(postTransferencias);

  const params = {
    headers: {
      'Content-Type': 'application/json',
      'Authorization': 'Bearer ' + token
    },
  };

  const res = http.post(url, payload, params);

  check(res, {
    'Validar que o status é 201': (r) => r.status === 201
  });

  sleep(1);
}
