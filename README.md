# Escola
projeto para prototipo de site escolar com intuito de aprendizado em angular e Java

``` mermaid

classDiagram
    class Usuario {
        +id: Long
        +nome: String
        +email: String
        +senha: String
        <<abstract>>
    }

    Usuario <|-- Professor
    Usuario <|-- Aluno
    Usuario <|-- Pai
    Usuario <|-- Coordenador
    Usuario <|-- Diretor

    class Professor {
        +inserirNotas(): void
        +inserirFaltas(): void
    }

    class Aluno {
        +receberNotas(): void
        +visualizarFaltas(): void
    }

    class Pai {
        +acompanharAluno(): void
        +enviarMensagemCoordenador(): void
    }

    class Coordenador {
        +comunicarPais(): void
        +comunicarProfessores(): void
    }

    class Diretor {
        +visualizarTudo(): void
    }

    class Nota {
        +id: Long
        +valor: Double
        +data: Date
    }

    class Falta {
        +id: Long
        +data: Date
        +justificada: Boolean
    }

    Professor "1" -- "0..*" Nota: Insere
    Aluno "1" -- "0..*" Nota: Recebe
    Professor "1" -- "0..*" Falta: Insere
    Aluno "1" -- "0..*" Falta: Recebe
    Pai "1" -- "1" Aluno: Acompanha
    Coordenador "1" -- "0..*" Pai: Comunica
    Coordenador "1" -- "0..*" Professor: Comunica
    Diretor "1" -- "0..*" Coordenador: Supervisiona

```
