// Componentes por funciones 
const NavBar =()=> {
    return (
      <div class="max-w-full">
        <div class="flex justify-center">
            <img src="./baner.jpg" class="w-1/2"></img>
        </div>

          <nav class='navbar navbar-expand-lg navbar-blue-800 bg-blue-800 pb-2'>
              <div class='container-fluid'>
                  <button class='navbar-toggler' type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  </button>
                      <div class='flex justify-center'>
                              
                              {/* Button Home */}
                              <span class="material-symbols-rounded text-white pt-1 pr-3">home</span>

                              {/* Conocenos */}
                                <select class="text-white appearance-none text-xl pb-1 border border-blue-800 text-sm bg-blue-800 dark:text-white dark:focus:border-blue-500 pl-6 pr-5" name="conocenos">
                                <option selected hidden>Conocenos</option>
                                    <option>opcion 1</option>
                                    <option>opcion 2</option>
                                    <option>opcion 3</option>
                                </select>

                                {/* Oferta Educativa */}
                                <select class="text-white appearance-none text-xl pb-1 border border-blue-800 text-sm bg-blue-800 dark:text-white dark:focus:border-blue-500 pl-6 pr-5"  name="ofertaeducativa">
                                <option selected hidden>Oferta Educativa</option>
                                    <option>opcion 1</option>
                                    <option>opcion 2</option>
                                    <option>opcion 3</option>
                                </select>

                                {/* Nucleo Academico*/}
                                <select class="text-white appearance-none text-xl pb-1 border border-blue-800 text-sm bg-blue-800 dark:text-white dark:focus:border-blue-500 pl-6 pr-5"  name="nucleo">
                                <option selected hidden>Nucleo Academico</option>
                                    <option>opcion 1</option>
                                    <option>opcion 2</option>
                                    <option>opcion 3</option>
                                </select>

                              
                                {/* Aspirantes*/}
                                <select class="text-white appearance-none text-xl pb-1 border border-blue-800 text-sm bg-blue-800 dark:text-white dark:focus:border-blue-500 pl-6 pr-5"  name="aspirantes">
                                <option selected hidden>Aspirantes</option>
                                    <option>opcion 1</option>
                                    <option>opcion 2</option>
                                    <option>opcion 3</option>
                                </select>

                                {/*Repositorio Academico*/}
                                <select class="text-white appearance-none text-xl pb-1 border border-blue-800 text-sm bg-blue-800 dark:text-white dark:focus:border-blue-500 pl-6 pr-5"  name="repositorioacademico">
                                    <option selected hidden>Repositorio Academico</option>
                                        <option>opcion 1</option>
                                        <option>opcion 2</option>
                                        <option>opcion 3</option>
                                    </select>

                              <button class="text-white text-xl pl-6 pr-6 pb-1">Contacto</button>
                      </div>
                  {/* <label class='text-white mx-2'>Cerrar Sesión</label> */}
              </div>
          </nav>
      </div>
    )
  }
  
  export default NavBar;
