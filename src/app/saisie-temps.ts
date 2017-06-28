 export class SaisieTemps{
  	constructor(
 		public Mois: string,
 		public Année: number,
 		public Jour: number,
 		public ListeContrats : ['Prestation', 'Formation', 'Abscences','IC', 'IRP' ], 
 		public NomClient : ['RTT','KB' ],
 		public ListMois = ['janvier','février', 'mars', 'avril', 'mai', 'juin', 'juillet', 'août', 'septembre', 'octobre', 'novembre', 'décembre' ],
 	){}
}