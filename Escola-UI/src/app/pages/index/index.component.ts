import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { title } from 'node:process';

@Component({
  selector: 'app-index',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './index.component.html',
  styleUrl: './index.component.css'
})
export class IndexComponent {

  @Input() nomeEscola: string = 'Escola Raizes';
  @Input() anoFundado: number = 1990;

  historicoItem= [
    {
      title: `Fundada em ${this.anoFundado}`,
      content: `A ${this.nomeEscola} foi fundada em ${this.anoFundado} com o objetivo de oferecer educação de qualidade para a comunidade local.`
    },
    {
      title: 'Expansão e Crescimento',
      content: 'Ao longo dos anos, a escola expandiu suas instalações e programas para atender às necessidades crescentes da comunidade.'
    },
    {
      title: 'Tradição e Inovação',
      content: `A ${this.nomeEscola} mantém uma tradição de excelência acadêmica, `
    }
  ];

  missaoItem=[
    {
      title: 'Missão',
      content:'Inspirar e preparar os alunos para o sucesso acadêmico, pessoal e profissional, cultivando a paixão pelo conhecimento e o desenvolvimento de habilidades essenciais para o futuro.'
    },
    {
      title: 'Visão',
      content: 'Ser reconhecida como referência em educação, formando cidadãos éticos, responsáveis e inovadores, capazes de contribuir positivamente para a sociedade.'
    },
    {
      title: 'Valores',
      content: 'Excelência acadêmica, respeito, responsabilidade, integridade, criatividade, inovação e compromisso com a comunidade.'
    }
  ]
}
