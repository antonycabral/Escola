import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';

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
      title: 'Fundada em [ano]',
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
  ]
}
