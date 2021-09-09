import React from 'react';
import { render, screen } from '@testing-library/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AnswerField from '.';

describe('AnswerField', () => {
  test('Ao pressionar o botão, deve informar uma mensagem de erro', () => {
    const schema = Yup.object().shape({
      name: Yup.string().required('Informe um valor válido'),
    });

    const element = render(
      <Formik initialValues={{ name: '' }} validationSchema={schema}>
        {({ touched, errors  }) => (
          <Form>
            <AnswerField
              name="name"
              type="text"
              touched={touched}
              handleRelease={() => handleRelease('name', errors)}
              errors={errors}
              handleSatisfaction={() => {}}
              placeholder="Seu nome"
              />
          </Form>
        )}
      </Formik>
    );

    const textError = screen.queryByText('Informe um valor válido');

    expect(textError).not.toBeInTheDocument();

    const button = element.container.querySelector('svg');

    expect(button).toBeInTheDocument();
  });
});
