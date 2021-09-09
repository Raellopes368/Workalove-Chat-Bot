import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import AnswerField from '.';

afterEach(cleanup);

describe('AnswerField', () => {
  it('Verifica se os elementos estão renderizando corretamente', () => {
    const schema = Yup.object().shape({
      name: Yup.string().required('Este campo é obrigatório'),
    });

    const element = render(
      <Formik initialValues={{ name: '' }} validationSchema={schema}>
        {({ touched, errors, values  }) => (
          <Form>
            <AnswerField
              name="name"
              type="text"
              touched={touched}
              handleRelease={() => {}}
              errors={errors}
              handleSatisfaction={() => {}}
              placeholder="Seu nome"
              realeaseds={{}}
              values={values}
              />
          </Form>
        )}
      </Formik>
    );

    const textError = screen.queryByText('Este campo é obrigatório');

    expect(textError).not.toBeInTheDocument();

    const input = element.container.querySelector('input');

    expect(input).toBeInTheDocument();

    expect(input).toHaveFocus();
  });
});
