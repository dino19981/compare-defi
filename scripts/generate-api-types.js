import path from 'path';
import { generateApi } from 'swagger-typescript-api';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3010';

generateApi({
  url: `${API_URL}/swagger-json`,
  output: path.resolve(process.cwd(), 'src/shared/api/generated'),
  name: 'api.ts',
  generateClient: true,
  generateRouteTypes: true,
  generateResponses: true,
  toJS: false,
  extractRequestParams: true,
  extractRequestBody: true,
  modular: false,
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    trailingComma: 'all',
    parser: 'typescript',
  },
  defaultResponseType: 'void',
  singleHttpClient: true,
  cleanOutput: true,
  enumNamesAsValues: false,
  moduleNameFirstTag: false,
  generateUnionEnums: false,
  typePrefix: '',
  typeSuffix: '',
  enumKeyPrefix: '',
  enumKeySuffix: '',
  addReadonly: true,
  sortTypes: true,
  sortRoutes: true,
  extractEnums: true,
  unwrapResponseData: true,
  jsDoc: true,
  silent: false,
  httpClientType: 'axios',
  defaultResponseAsSuccess: false,
  defaultResponseErrorAsSuccess: false,
})
  .then(() => {
    console.log('✅ API типы успешно сгенерированы');
  })
  .catch((error) => {
    console.error('❌ Ошибка при генерации API типов:', error);
    process.exit(1);
  });
