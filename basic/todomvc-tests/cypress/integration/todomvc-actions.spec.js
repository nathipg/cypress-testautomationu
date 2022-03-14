/// <reference types="cypress" />

import {
  addTodo,
  navigate,
  validateTodoText,
  validateToggleState,
  toggleTodo,
  validateTodoCompletedState,
  clearCompleted,
  validateNumberOfTodosShown,
} from '../page-objects/todo-page';

describe('todo actions', () => {
  beforeEach(() => {
    navigate();
    addTodo('Clean room');
  });

  // it.only => run a single test

  it('should be able to add a new todo to the list', () => {
    validateTodoText(0, 'Clean room');
    validateToggleState(0, false);
  });

  describe('toggling todos', () => {
    it('should be able to complete a task', () => {
      toggleTodo(0);
      validateTodoCompletedState(0, true);
    });

    it('should be able to clear completed tasks', () => {
      toggleTodo(0);
      clearCompleted();
      validateNumberOfTodosShown(0);
    });
  });
});
