import React from 'react';
import { render, screen } from '@testing-library/react';
import QuestionField from '.';

describe('QuestionField', () => {
  it('Deve conter o texto que é passado como parâmetro', () => {
    render(<QuestionField text="Informe seu nome" />);
    const textVerify = screen.getByText('Informe seu nome');
    expect(textVerify).toBeInTheDocument();
  });
});
