# Escola
projeto para prototipo de site escolar com intuito de aprendizado em angular e Java

``` mermaid

classDiagram
    class Usuario {
        +Long id
        +String nome
        +String email
        +String senha
    }

    class Professor {
        +Long id
        +String nome
        +String email
        +String senha
        +String disciplina
        +List~Nota~ notas
        +List~Falta~ faltas
    }

    class Aluno {
        +Long id
        +String nome
        +String email
        +String senha
        +List~Nota~ notas
        +List~Falta~ faltas
    }

    class Pai {
        +Long id
        +String nome
        +String email
        +String senha
        +List~Aluno~ filhos
    }

    class Coordenador {
        +Long id
        +String nome
        +String email
        +String senha
        +List~Pai~ pais
        +List~Professor~ professores
    }

    class Diretor {
        +Long id
        +String nome
        +String email
        +String senha
    }

    class Nota {
        +Long id
        +Double valor
        +LocalDate data
        +Usuario aluno
        +Usuario professor
    }

    class Falta {
        +Long id
        +LocalDate data
        +Boolean justificada
        +Usuario aluno
        +Usuario professor
    }

    Pai --> Aluno : "filhos"
    Professor --> Nota : "adiciona"
    Aluno --> Nota : "recebe"
    Professor --> Falta : "adiciona"
    Aluno --> Falta : "recebe"
    Coordenador --> Pai : "gerencia"
    Coordenador --> Professor : "comunica"
    Diretor --> Coordenador : "monitora"
    Diretor --> Professor : "monitora"
    Diretor --> Pai : "monitora"

```
