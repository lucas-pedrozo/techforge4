// Exercício 4: Sistema de Votação: Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object. Crie duas subclasses: Election e Poll. Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto. Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).
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
var VoteSystem = /** @class */ (function () {
    function VoteSystem() {
        this.votes = {};
    }
    return VoteSystem;
}());
var Election = /** @class */ (function (_super) {
    __extends(Election, _super);
    function Election() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Election.prototype.voteFor = function (candidate) {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        }
        else {
            this.votes[candidate] = 1;
        }
    };
    Election.prototype.getResults = function () {
        return this.votes;
    };
    return Election;
}(VoteSystem));
var Poll = /** @class */ (function (_super) {
    __extends(Poll, _super);
    function Poll() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Poll.prototype.voteFor = function (candidate) {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        }
        else {
            this.votes[candidate] = 1;
        }
    };
    Poll.prototype.getResults = function () {
        var sortedCandidates = Object.entries(this.votes)
            .sort(function (a, b) { return b[1] - a[1]; })
            .map(function (_a) {
            var candidate = _a[0], votes = _a[1];
            return ({ candidate: candidate, votes: votes });
        });
        return sortedCandidates;
    };
    return Poll;
}(VoteSystem));
var election = new Election();
election.voteFor("Candidato A");
election.voteFor("Candidato B");
election.voteFor("Candidato A");
console.log("Resultados da Eleição:", election.getResults());
var poll = new Poll();
poll.voteFor("Candidato X");
poll.voteFor("Candidato Y");
poll.voteFor("Candidato X");
poll.voteFor("Candidato Z");
poll.voteFor("Candidato X");
console.log("Resultados da Pesquisa:", poll.getResults());
