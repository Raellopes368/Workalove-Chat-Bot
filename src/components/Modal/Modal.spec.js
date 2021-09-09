import React from 'react';
import { screen, render } from '@testing-library/react';
import Modal from '.';


describe('Modal',  () => {
  test('Deve conter um botão, um svg e uma mensagem de sucesso', () => {
    const element = render(<Modal type="success" handleClose={() => { }}/>);
    const button = screen.getByRole('button');
    expect(button).toBeInTheDocument();
    const svg = element.container.querySelector('svg');
    expect(svg).toBeInTheDocument();
    const textMessage = screen.getByText('Parabéns, seus dados foram cadastrados com sucesso');
    expect(textMessage).toBeInTheDocument();
  });
});
