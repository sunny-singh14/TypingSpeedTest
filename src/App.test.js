import { render, screen } from '@testing-library/react';
import { Passage } from './components/Passage';
import { Body } from './components/Body';

test('renders portfolio link', () => {
  render(<Body />);
  const linkElement = screen.getByText(/Sunny Kumar/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders passage', () => {
  render(<Passage typedText={"Being human makes us susceptible"} remainingText={" to the onset of feelings."}/>);
  const typedTextElement = screen.getByText(/Being human makes us susceptible/i);
  expect(typedTextElement).toBeInTheDocument();

  const remainingTextElement = screen.getByText(/to the onset of feelings./i);
  expect(remainingTextElement).toBeInTheDocument();
});
