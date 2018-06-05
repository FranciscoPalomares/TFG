

export class Usuario{
	constructor(
		public id: string,
		public nombre: string,
		public apellidos: string,
		public email: string,
		public password: string,
		public rol: string,
		public imagen: string
	){}
}