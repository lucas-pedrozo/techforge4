// Exercício 4: Sistema de Votação: Crie uma classe abstrata VoteSystem que gerencie votos em uma competição. Ela deve ter métodos abstratos voteFor(candidate: string): void e getResults(): object. Crie duas subclasses: Election e Poll. Election deve permitir adicionar votos para um candidato específico e retornar o total de votos por candidato em um objeto. Poll deve retornar uma lista dos candidatos em ordem de votos (do mais votado para o menos votado).

abstract class VoteSystem {
    protected votes: Record<string, number>; 

    constructor() {
        this.votes = {};
    }

    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        } else {
            this.votes[candidate] = 1;
        }
    }

    getResults(): object {
        return this.votes;
    }
}

class Poll extends VoteSystem {
    voteFor(candidate: string): void {
        if (this.votes[candidate]) {
            this.votes[candidate] += 1;
        } else {
            this.votes[candidate] = 1;
        }
    }

    getResults(): object {
        const sortedCandidates = Object.entries(this.votes)
            .sort((a, b) => b[1] - a[1]) 
            .map(([candidate, votes]) => ({ candidate, votes }));
        
        return sortedCandidates; 
    }
}

const election = new Election();
election.voteFor("Candidato A");
election.voteFor("Candidato B");
election.voteFor("Candidato A");
console.log("Resultados da Eleição:", election.getResults());

const poll = new Poll();
poll.voteFor("Candidato X");
poll.voteFor("Candidato Y");
poll.voteFor("Candidato X");
poll.voteFor("Candidato Z");
poll.voteFor("Candidato X");
console.log("Resultados da Pesquisa:", poll.getResults());
