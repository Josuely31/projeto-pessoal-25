const TaskManager = require('./task');

describe('TaskManager', () => {
  let manager;

  beforeEach(() => {
    manager = new TaskManager();
  });

  test('Adiciona uma tarefa corretamente', () => {
    manager.addTask('Estudar JavaScript');
    expect(manager.listTasks()).toContain('Estudar JavaScript');
  });

  test('Remove uma tarefa corretamente', () => {
    manager.addTask('Fazer compras');
    manager.removeTask('Fazer compras');
    expect(manager.listTasks()).not.toContain('Fazer compras');
  });

  test('Lista tarefas corretamente', () => {
    manager.addTask('Ler um livro');
    manager.addTask('Ir à academia');
    expect(manager.listTasks()).toEqual(['Ler um livro', 'Ir à academia']);
  });

  test('Marca uma tarefa como concluída', () => {
    manager.addTask('Enviar relatório');
    manager.completeTask('Enviar relatório');
    expect(manager.isCompleted('Enviar relatório')).toBe(true);
  });

  test('Verifica se uma tarefa está concluída', () => {
    manager.addTask('Estudar React');
    expect(manager.isCompleted('Estudar React')).toBe(false);
  });

  test('Não permite adicionar tarefas inválidas', () => {
    expect(() => manager.addTask('')).toThrow('Tarefa inválida');
    expect(() => manager.addTask(null)).toThrow('Tarefa inválida');
  });

  test('Remove corretamente uma tarefa específica', () => {
    manager.addTask('Correr no parque');
    manager.addTask('Fazer meditação');
    manager.removeTask('Correr no parque');
    expect(manager.listTasks()).toEqual(['Fazer meditação']);
  });

  test('Não marca tarefas inexistentes como concluídas', () => {
    manager.completeTask('Jogar futebol');
    expect(manager.isCompleted('Jogar futebol')).toBe(false);
  });

  test('Lista vazia quando nenhuma tarefa foi adicionada', () => {
    expect(manager.listTasks()).toEqual([]);
  });

  test('Funciona corretamente após múltiplas operações', () => {
    manager.addTask('Escrever um artigo');
    manager.addTask('Aprender TypeScript');
    manager.completeTask('Escrever um artigo');
    manager.removeTask('Aprender TypeScript');
    expect(manager.isCompleted('Escrever um artigo')).toBe(true);
    expect(manager.listTasks()).toEqual(['Escrever um artigo']);
  });
});
