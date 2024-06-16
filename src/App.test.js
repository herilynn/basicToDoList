import { render, fireEvent, screen } from '@testing-library/react';
import App from './App';
import userEvent from '@testing-library/user-event'; 
import Form from './components/AddTask/Form';

test('remove a task', () => {
  render(<App />);

  // Find "Remove" button with id '1'
  const removeButton = screen.getByTestId('remove-button-1'); // 

  removeButton.click();

  const removedTask = screen.queryByTestId('task-1'); 

  expect(removedTask).toBeNull(); // task should no longer be present
});

test('add a new task', () => {
  const mockAddTask = jest.fn();

  render(<Form onAddTask={mockAddTask} />);

  // Simulate user input for task name
  const taskNameInput = screen.getByPlaceholderText('Enter Task');
  userEvent.type(taskNameInput, 'New Task');

  // Simulate user input for task time
  const taskTimeInput = screen.getByPlaceholderText('YYYY-MM-DD-THH-mm');
  fireEvent.change(taskTimeInput, { target: { value: '2024-06-30T10:00' } });

  // Simulate form submission (clicking the "Add Task" button)
  const addButton = screen.getByText('Add Task');
  userEvent.click(addButton);

  // Assert that the addTaskHandler was called with the correct arguments
  expect(mockAddTask).toHaveBeenCalledWith('New Task', '2024-06-30T10:00');

});