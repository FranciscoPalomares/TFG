export class Album{
	constructor(
		public id: string,
		public titulo: string,
		public descripcion: string,
		public imagen: string,
		public anio: number,
		public id_artista: string
	){}
}