// 1 - Sistema de Tarefas e Projetos: Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[]. Crie duas subclasses: Project e DailyTasks. Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto. DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.



abstract class TaskManager {
    protected tasks: Set<string>;

    constructor() {
        this.tasks = new Set();
    }

    abstract addTask(task: string): void;
    abstract listTasks(): string[];
}

class Project extends TaskManager {
    private projectName: string;

    constructor(projectName: string) {
        super();
        this.projectName = projectName;
    }

    addTask(task: string): void {
        if (this.tasks.has(task)) {
            console.log(`A tarefa "${task}" já existe no projeto "${this.projectName}".`);
        } else {
            this.tasks.add(task);
            console.log(`Tarefa "${task}" adicionada ao projeto "${this.projectName}".`);
        }
    }

    listTasks(): string[] {
        return Array.from(this.tasks).map(task => `Projeto "${this.projectName}": ${task}`);
    }
}

class DailyTasks extends TaskManager {
    addTask(task: string): void {
        if (this.tasks.has(task)) {
            console.log(`A tarefa diária "${task}" já foi adicionada.`);
        } else {
            this.tasks.add(task);
            console.log(`Tarefa diária "${task}" adicionada.`);
        }
    }

    listTasks(): string[] {
        return Array.from(this.tasks).map(task => `Tarefa Diária: ${task}`);
    }
}

const project = new Project("Sistema de Gerenciamento");
project.addTask("Implementar autenticação");
project.addTask("Criar banco de dados");
project.addTask("Implementar autenticação");
console.log("Tarefas do projeto:", project.listTasks());

// Gerenciando tarefas diárias
const dailyTasks = new DailyTasks();
dailyTasks.addTask("Reunião de equipe");
dailyTasks.addTask("Enviar relatório");
console.log("Tarefas diárias:", dailyTasks.listTasks());