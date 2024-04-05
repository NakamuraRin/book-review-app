import React from 'react';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import { store } from './store';
import '@testing-library/jest-dom';
import App from './App';

test('指定のラベル要素が存在している', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const emailLabel = screen.getByText('メールアドレス');
  const passwordLabel = screen.getByText('パスワード');

  expect(emailLabel).toBeInTheDocument();
  expect(passwordLabel).toBeInTheDocument();
});

test('指定の入力フォームが存在している', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const emailInput = screen.getByLabelText('メールアドレス');
  const passwordInput = screen.getByLabelText('パスワード');

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
});

test('ログインボタンが存在している', () => {
  render(
    <Provider store={store}>
      <App />
    </Provider>
  );

  const loginButton = screen.getByRole('button', { name: 'ログイン' });

  expect(loginButton).toBeInTheDocument();
});