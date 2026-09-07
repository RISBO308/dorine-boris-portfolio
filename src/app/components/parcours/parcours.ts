import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-parcours',
  styleUrl: './parcours.css',
  templateUrl: './parcours.html',
})
export class Parcours {
  readonly cvUrl = '/CV%20DORINE%20BORIS%20DEV%20ANGULAR.pdf';

  readonly entries = [
    '2022 — BTS Entrepreneuriat agropastoral — Institut Supérieur Yérima Déwa',
    '2023 — Licence professionnelle Agronomie tropicale — Université Agricole de Management des Métiers de la Production',
    '2025 — SNK AI Challenge — Fondation SNK — Thème : Intelligence artificielle générative & prompting',
    '2026 — Angular Talent Lab — Orange Digital Center — Thème : Développement web avec Angular',
    '2026 — Productivité, Emploi, Business & IA — Orange Digital Center — Thème : Intelligence artificielle, productivité numérique & innovation',
    '2026 — Création de contenus numériques — Orange Digital Center — Thème : Création & montage de contenus numériques',
  ];
}
