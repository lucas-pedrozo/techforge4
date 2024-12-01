// 1 - Sistema de Tarefas e Projetos: Implemente uma classe abstrata TaskManager que represente um sistema de gerenciamento de tarefas. Ela deve ter um método abstrato addTask(task: string): void e outro listTasks(): string[]. Crie duas subclasses: Project e DailyTasks. Project deve permitir adicionar tarefas específicas de um projeto e retornar uma lista de todas as tarefas do projeto. DailyTasks deve permitir adicionar tarefas diárias e listar as tarefas adicionadas.
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var TaskManager = /** @class */ (function () {
    function TaskManager() {
        this.tasks = new Set();
    }
    return TaskManager;
}());
var Project = /** @class */ (function (_super) {
    __extends(Project, _super);
    function Project(projectName) {
        var _this = _super.call(this) || this;
        _this.projectName = projectName;
        return _this;
    }
    Project.prototype.addTask = function (task) {
        if (this.tasks.has(task)) {
            console.log("A tarefa \"".concat(task, "\" j\u00E1 existe no projeto \"").concat(this.projectName, "\"."));
        }
        else {
            this.tasks.add(task);
            console.log("Tarefa \"".concat(task, "\" adicionada ao projeto \"").concat(this.projectName, "\"."));
        }
    };
    Project.prototype.listTasks = function () {
        var _this = this;
        return Array.from(this.tasks).map(function (task) { return "Projeto \"".concat(_this.projectName, "\": ").concat(task); });
    };
    return Project;
}(TaskManager));
var DailyTasks = /** @class */ (function (_super) {
    __extends(DailyTasks, _super);
    function DailyTasks() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    DailyTasks.prototype.addTask = function (task) {
        if (this.tasks.has(task)) {
            console.log("A tarefa di\u00E1ria \"".concat(task, "\" j\u00E1 foi adicionada."));
        }
        else {
            this.tasks.add(task);
            console.log("Tarefa di\u00E1ria \"".concat(task, "\" adicionada."));
        }
    };
    DailyTasks.prototype.listTasks = function () {
        return Array.from(this.tasks).map(function (task) { return "Tarefa Di\u00E1ria: ".concat(task); });
    };
    return DailyTasks;
}(TaskManager));
var project = new Project("Sistema de Gerenciamento");
project.addTask("Implementar autenticação");
project.addTask("Criar banco de dados");
project.addTask("Implementar autenticação");
console.log("Tarefas do projeto:", project.listTasks());
// Gerenciando tarefas diárias
var dailyTasks = new DailyTasks();
dailyTasks.addTask("Reunião de equipe");
dailyTasks.addTask("Enviar relatório");
console.log("Tarefas diárias:", dailyTasks.listTasks());
