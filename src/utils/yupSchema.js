import * as Yup from 'yup';
import yupErrorMessages from './yupErrorMessages';

const { emptyField, shortField, fieldFormatEmail, fieldString } =
  yupErrorMessages;
const yupSchema = Yup.object().shape({
  name: Yup.string(fieldString).min(2, 'Muito curto').required(emptyField),
  uf: Yup.string(fieldString).when('name', (name, field) =>
    name ? field.required(emptyField) : field
  ),
  city: Yup.string(fieldString)
    .min(2, shortField)
    .when('uf', (uf, field) => (uf ? field.required(emptyField) : field)),
  birth: Yup.date(emptyField).when('city', (city, field) =>
    city ? field.required(emptyField) : field
  ),
  email: Yup.string()
    .email(fieldFormatEmail)
    .when('birth', (birth, field) =>
      birth ? field.required(emptyField) : field
    ),
});

export default yupSchema;
